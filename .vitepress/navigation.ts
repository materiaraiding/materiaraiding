import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { difficultyTypes } from './theme/components/lists/difficultyTypes';

// Function to extract frontmatter from markdown files
export const extractFrontmatter = (filePath: string) => {
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

// Function to capitalize first letter of each word
export const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};

// Reusable function to sort items based on difficultyTypes
export const sortByDifficultyType = <T extends string | { name: string }>(items: T[]): T[] => {
  // Create a lookup map for difficulty types with normalized keys (lowercase)
  // This avoids repeated searches through the difficultyTypes array
  const difficultyMap = new Map<string, number>();

  // Populate the map with both type and urlOverride as keys (normalized to lowercase)
  difficultyTypes.forEach(type => {
    // Add main type to map
    difficultyMap.set(type.type.toLowerCase(), type.order);

    // Add urlOverride to map if it exists
    if (type.urlOverride) {
      difficultyMap.set(type.urlOverride.toLowerCase(), type.order);
    }
  });

  return [...items].sort((a, b) => {
    // Extract the name string depending on whether we have strings or objects
    const nameA = typeof a === 'string' ? a : a.name;
    const nameB = typeof b === 'string' ? b : b.name;

    // Get order values from the map (if they exist)
    const orderA = difficultyMap.get(nameA.toLowerCase());
    const orderB = difficultyMap.get(nameB.toLowerCase());

    // Sort by order if both have defined order values
    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB;
    }
    // If only one has an order value, prioritize it
    if (orderA !== undefined) return -1;
    if (orderB !== undefined) return 1;
    // For items without an order value, maintain alphabetical order
    return nameA.localeCompare(nameB);
  });
};

// Function to generate sidebar items from directory
export const generateSidebarItems = (dir: string, baseUrl: string = '/'): any[] => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const items: any[] = [];

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

      const item = {
        text,
        link: hasIndex ? link : undefined,
        collapsed: false,
        items: generateSidebarItems(path.join(dir, file.name), `/${relativePath}`),
        order
      };

      // Only add if it has items or an index
      if (item.items.length > 0 || hasIndex) {
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

// Function to generate nav items for guide categories
export const generateGuidesNav = (): any[] => {
  const guidesDir = path.resolve('docs/guides');
  const dirs = fs.readdirSync(guidesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dir => dir.name);

  // Sort directories using the shared sorting function
  const sortedDirs = sortByDifficultyType(dirs);

  return [{
    text: "Difficulty",
    items: sortedDirs.map(dir => ({
      text: toTitleCase(dir),
      link: `/${dir}`
    }))
  }];
};

// Function to generate archive nav items
export const generateArchivesNav = (): any[] => {
  const archiveDir = path.resolve('docs/archive');
  const dirs = fs.readdirSync(archiveDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'));

  return [{
    text: "Expansions",
    items: dirs.map(dir => ({
      text: toTitleCase(dir.name),
      link: `/archive/${dir.name}`
    }))
  }];
};

// Function to generate full sidebar configuration based on guides folders
export const generateFullSidebar = (resourcesNav: any[]): Record<string, any[]> => {
  const sidebar: Record<string, any[]> = {
    '/': [] // Root sidebar
  };

  // Add guide categories to root sidebar
  const guidesDir = path.resolve('docs/guides');
  const guideCategories = fs.readdirSync(guidesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'));

  // Sort the categories using the shared sorting function
  const sortedCategories = sortByDifficultyType(guideCategories);

  sortedCategories.forEach(category => {
    const categoryPath = path.join(guidesDir, category.name);
    const hasIndex = fs.existsSync(path.join(categoryPath, 'index.md'));

    sidebar['/'].push({
      text: toTitleCase(category.name),
      link: hasIndex ? `/${category.name}` : undefined,
      collapsed: false,
      items: generateSidebarItems(categoryPath, `/${category.name}`)
    });
  });

  // Generate archive sidebar sections
  const archiveDir = path.resolve('docs/archive');
  if (fs.existsSync(archiveDir)) {
    const archiveCategories = fs.readdirSync(archiveDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'));

    archiveCategories.forEach(category => {
      const categoryPath = path.join(archiveDir, category.name);
      const hasIndex = fs.existsSync(path.join(categoryPath, 'index.md'));

      sidebar[`/archive/${category.name}`] = [{
        text: toTitleCase(category.name),
        link: `/archive/${category.name}`,
        items: generateSidebarItems(categoryPath, `/archive/${category.name}`)
      }];
    });
  }

  // Add resources sidebar
  sidebar['/resources/'] = resourcesNav;

  return sidebar;
};

// Function to generate full navigation structure including resources and extra links
export const generateFullNav = (resourcesNav: any[], extraLinks: any[]): any[] => {
  return [
	{ text: "Home", link: "/" },
	{
	  text: "Guides",
	  items: generateGuidesNav(),
	},
	{
	  text: "Archives",
	  items: generateArchivesNav(),
	},
	{
	  text: "Resources",
	  items: resourcesNav,
	},
	...extraLinks,
  ];
};