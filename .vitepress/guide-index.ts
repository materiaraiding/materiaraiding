import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface GuideEntry {
  text: string;
  link?: string;
  collapsed?: boolean;
  order: number | null;
  items?: GuideEntry[];
}

export const toTitleCase = (str: string): string => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};

const extractFrontmatter = (filePath: string): Record<string, any> => {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return matter(content).data;
    }
  } catch (error) {
    console.error(`Error reading frontmatter from ${filePath}:`, error);
  }
  return {};
};

export const discoverGuides = (dir: string): GuideEntry[] => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const items: GuideEntry[] = [];

  files.forEach(file => {
    // Skip hidden files and index files (they represent the section itself)
    if (file.name.startsWith('.') || file.name === 'index.md') {
      return;
    }

    const resolvedPath = path.resolve(dir, file.name);
    const relativePath = path.relative('docs', resolvedPath).replace(/\\/g, '/');

    if (file.isDirectory()) {
      // For directories, create a section with child items
      const text = toTitleCase(file.name);
      const link = `/${relativePath}`;

      // Check if the directory has an index.md
      const hasIndex = fs.existsSync(path.join(dir, file.name, 'index.md'));

      // Check if index.md has an order in frontmatter
      let order: number | null = null;
      if (hasIndex) {
        const indexFrontmatter = extractFrontmatter(path.join(dir, file.name, 'index.md'));
        if (indexFrontmatter && typeof indexFrontmatter.order === 'number') {
          order = indexFrontmatter.order;
        }
      }

      const item: GuideEntry = {
        text,
        link: hasIndex ? link : undefined,
        collapsed: false,
        items: discoverGuides(path.join(dir, file.name)),
        order
      };

      // Only add if it has items or an index
      if (item.items!.length > 0 || hasIndex) {
        items.push(item);
      }
    } else if (file.name.endsWith('.md')) {
      // For markdown files, get the text from frontmatter.fightID or filename
      const mdFilePath = path.join(dir, file.name);
      const frontmatter = extractFrontmatter(mdFilePath);

      // Get name from the file name as fallback
      const name = file.name.replace('.md', '');

      // Use fightID from frontmatter if available, otherwise use formatted file name
      const text = frontmatter.fightID ||
        (name.toUpperCase() === name ? name : toTitleCase(name));

      // Extract order from frontmatter if it exists
      const order = frontmatter && typeof frontmatter.order === 'number' ? frontmatter.order : null;
      items.push({
        text,
        link: `/${relativePath.replace('guides/', '').replace('.md', '')}`,
        order
      });
    }
  });

  // Sort items by order if available, then alphabetically
  items.sort((a, b) => {
    // If both have order, sort by order
    if (a.order !== null && b.order !== null) {
      return a.order - b.order;
    }
    // If only one has order, prioritize it
    if (a.order !== null) return -1;
    if (b.order !== null) return 1;
    // Otherwise sort alphabetically by text
    return a.text.localeCompare(b.text);
  });

  return items;
};
