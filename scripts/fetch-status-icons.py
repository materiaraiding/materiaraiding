#!/usr/bin/env python3
"""
Fetch FFXIV status data and icons from XIVAPI v2.

Usage:
    python scripts/fetch-status-icons.py [options]

Outputs:
    docs/public/images/statusicons/*.png  (icon images)
    .vitepress/data/status.json           (status metadata)

Run with --help for all options.
"""

import json
import os
import sys
import time
import argparse
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError
from concurrent.futures import ThreadPoolExecutor, as_completed

XIVAPI_BASE = "https://v2.xivapi.com"
SHEET_URL = f"{XIVAPI_BASE}/api/sheet/Status"
ASSET_URL = f"{XIVAPI_BASE}/api/asset"
PAGE_SIZE = 500
HEADERS = {"User-Agent": "materiaraiding-status-fetcher/1.0"}


def http_get_bytes(url: str, retries: int = 3) -> bytes:
    for attempt in range(retries):
        try:
            req = Request(url, headers=HEADERS)
            with urlopen(req, timeout=30) as resp:
                return resp.read()
        except HTTPError as e:
            if e.code == 429:
                wait = 2 ** (attempt + 1)
                print(f"\n  Rate limited, waiting {wait}s...")
                time.sleep(wait)
            elif attempt >= retries - 1:
                raise
            else:
                time.sleep(1.5 * (attempt + 1))
        except (URLError, OSError):
            if attempt >= retries - 1:
                raise
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"Failed to fetch {url} after {retries} attempts")


def http_get_json(url: str) -> dict:
    return json.loads(http_get_bytes(url))


def fetch_all_statuses() -> list[dict]:
    statuses = []
    cursor = None
    page = 0

    while True:
        page += 1
        url = f"{SHEET_URL}?limit={PAGE_SIZE}"
        if cursor is not None:
            url += f"&after={cursor}"

        sys.stdout.write(f"\r  Page {page} (offset {cursor or 0})...        ")
        sys.stdout.flush()

        data = http_get_json(url)
        rows = data.get("rows", [])

        if not rows:
            break

        for row in rows:
            name = row["fields"]["Name"]
            icon = row["fields"]["Icon"]
            if not name or icon["id"] == 0:
                continue

            icon_filename = icon["path"].split("/")[-1].replace(".tex", "")
            statuses.append({
                "ID": row["row_id"],
                "Name": name,
                "Icon": f"/images/statusicons/{icon_filename}.png",
                "GamePath": icon["path"],
            })

        cursor = rows[-1]["row_id"]
        if len(rows) < PAGE_SIZE:
            break

    sys.stdout.write("\n")
    return statuses


def download_icon(game_path: str, out_path: Path, force: bool) -> str:
    if not force and out_path.exists():
        return "skipped"
    url = f"{ASSET_URL}?path={game_path}&format=png"
    try:
        data = http_get_bytes(url)
        out_path.write_bytes(data)
        return "downloaded"
    except Exception as e:
        return f"error: {e}"


def find_project_root() -> Path:
    """Walk up from the script location to find the repo root."""
    here = Path(__file__).resolve().parent
    for candidate in [here, here.parent, here.parent.parent]:
        if (candidate / "docs" / "public" / "images").exists():
            return candidate
    return here.parent


def main():
    parser = argparse.ArgumentParser(
        description="Fetch FFXIV status icons and metadata from XIVAPI v2."
    )
    parser.add_argument(
        "--icons-dir",
        help="Directory to write icon PNGs (default: docs/public/images/statusicons)",
    )
    parser.add_argument(
        "--json-out",
        help="Path for output status.json (default: .vitepress/data/status.json)",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-download icons even if the file already exists",
    )
    parser.add_argument(
        "--skip-images",
        action="store_true",
        help="Update status.json only, skip downloading icon images",
    )
    parser.add_argument(
        "--workers",
        type=int,
        default=10,
        help="Concurrent download workers (default: 10)",
    )
    args = parser.parse_args()

    root = find_project_root()
    icons_dir = Path(args.icons_dir) if args.icons_dir else root / "docs" / "public" / "images" / "statusicons"
    json_out = Path(args.json_out) if args.json_out else root / ".vitepress" / "data" / "status.json"

    print(f"Icons dir : {icons_dir}")
    print(f"JSON out  : {json_out}")
    print()

    # --- Fetch metadata ---
    print("Fetching status sheet from XIVAPI...")
    statuses = fetch_all_statuses()
    print(f"  {len(statuses)} statuses found")

    # --- Write JSON ---
    json_out.parent.mkdir(parents=True, exist_ok=True)
    json_out.write_text(json.dumps(statuses, indent=2, ensure_ascii=False) + "\n")
    print(f"  Wrote {json_out}")

    if args.skip_images:
        print("\nSkipping image downloads (--skip-images passed).")
        return

    # --- Download icons ---
    icons_dir.mkdir(parents=True, exist_ok=True)
    print(f"\nDownloading {len(statuses)} icons ({args.workers} workers)...")

    downloaded = skipped = errors = 0

    def task(status: dict) -> tuple[str, str]:
        filename = status["Icon"].split("/")[-1]
        out = icons_dir / filename
        result = download_icon(status["GamePath"], out, args.force)
        return result, status["Name"]

    total = len(statuses)
    done = 0

    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(task, s): s for s in statuses}
        for fut in as_completed(futures):
            result, name = fut.result()
            done += 1
            if result == "downloaded":
                downloaded += 1
            elif result == "skipped":
                skipped += 1
            else:
                errors += 1
                sys.stdout.write(f"\n  ! {name}: {result}\n")

            if done % 100 == 0 or done == total:
                sys.stdout.write(
                    f"\r  {done}/{total}  "
                    f"downloaded={downloaded}  skipped={skipped}  errors={errors}   "
                )
                sys.stdout.flush()

    print(f"\n\nDone.  downloaded={downloaded}  skipped={skipped}  errors={errors}")
    if errors:
        sys.exit(1)


if __name__ == "__main__":
    main()
