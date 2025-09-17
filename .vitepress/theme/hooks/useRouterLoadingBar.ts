export default function useRouterLoadingBar() {
  function loading() {
    const loadingBar = document.getElementById("loading-bar");
    if (!loadingBar) { return; }
    loadingBar.classList.remove("finished");
    loadingBar.classList.add("loading");
  }

  function finished() {
    const loadingBar = document.getElementById("loading-bar");
    if (!loadingBar) { return; }
    loadingBar.classList.replace("loading", "finished");
    setTimeout(() => { loadingBar.classList.remove("finished") }, 300);
  }

  return { loading, finished }
}