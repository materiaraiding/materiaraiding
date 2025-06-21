import {defineConfig} from "vitepress";
import {
	imagePlugin,
	customBlockPlugin,
	youtubeEmbedPlugin,
	timingWindowPlugin,
	glossaryPlugin,
	statusIconPlugin,
} from "./plugins/markdown";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { difficultyTypes } from './theme/components/lists/difficultyTypes';

// Function to extract frontmatter from markdown files
const extractFrontmatter = (filePath: string) => {
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
const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
};

// Function to generate sidebar items from directory
const generateSidebarItems = (dir: string, baseUrl: string = '/'): any[] => {
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
        link: `/${relativePath.replace('.md', '')}`,
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
const generateGuidesNav = (): any[] => {
  const guidesDir = path.resolve('docs/guides');
  const dirs = fs.readdirSync(guidesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dir => dir.name);

  // Create a map of lowercase categories to their original case
  const dirLowerToOriginal = Object.fromEntries(dirs.map(dir => [dir.toLowerCase(), dir]));

  // Sort directories based on difficultyTypes
  const sortedDirs = [...dirs].sort((a, b) => {
    // Find matching difficultyType entries (case insensitive)
    const typeA = difficultyTypes.find(type =>
      type.urlOverride?.toLowerCase() === a.toLowerCase() ||
      type.type.toLowerCase() === a.toLowerCase()
    );
    const typeB = difficultyTypes.find(type =>
      type.urlOverride?.toLowerCase() === b.toLowerCase() ||
      type.type.toLowerCase() === b.toLowerCase()
    );

    // Sort by order if both have a difficultyType
    if (typeA && typeB) {
      return typeA.order - typeB.order;
    }
    // If only one has a difficultyType, prioritize it
    if (typeA) return -1;
    if (typeB) return 1;
    // For items without a difficultyType, maintain alphabetical order
    return a.localeCompare(b);
  });

  return [{
    text: "Difficulty",
    items: sortedDirs.map(dir => ({
      text: toTitleCase(dir),
      link: `/guides/${dir}`
    }))
  }];
};

// Function to generate archive nav items
const generateArchivesNav = (): any[] => {
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
const generateFullSidebar = (): Record<string, any[]> => {
  const sidebar: Record<string, any[]> = {
    '/': [] // Root sidebar
  };

  // Add guide categories to root sidebar
  const guidesDir = path.resolve('docs/guides');
  const guideCategories = fs.readdirSync(guidesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'));

  // Sort the categories based on difficultyTypes
  const sortedCategories = [...guideCategories].sort((a, b) => {
    // Find matching difficultyType entries (case insensitive)
    const typeA = difficultyTypes.find(type =>
      type.urlOverride?.toLowerCase() === a.name.toLowerCase() ||
      type.type.toLowerCase() === a.name.toLowerCase()
    );
    const typeB = difficultyTypes.find(type =>
      type.urlOverride?.toLowerCase() === b.name.toLowerCase() ||
      type.type.toLowerCase() === b.name.toLowerCase()
    );

    // Sort by order if both have a difficultyType
    if (typeA && typeB) {
      return typeA.order - typeB.order;
    }
    // If only one has a difficultyType, prioritize it
    if (typeA) return -1;
    if (typeB) return 1;
    // For items without a difficultyType, maintain alphabetical order
    return a.name.localeCompare(b.name);
  });

  sortedCategories.forEach(category => {
    const categoryPath = path.join(guidesDir, category.name);
    const hasIndex = fs.existsSync(path.join(categoryPath, 'index.md'));

    sidebar['/'].push({
      text: toTitleCase(category.name),
      link: hasIndex ? `/guides/${category.name}` : undefined,
      collapsed: false,
      items: generateSidebarItems(categoryPath, `/guides/${category.name}`)
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

// Manually defined resources for nav and sidebar
const resourcesNav = [
  {
    text: "Guides",
    items: [
      {text: "Beginners Guide", link: "/resources/beginnersguide"},
      {text: "Visitors Guide", link: "/resources/visitorsguide"},
    ],
  },
  {
    text: "Resources",
    items: [
      {text: "Plugins", link: "/resources/plugins"},
      {text: "Macro Mate", link: "/resources/macromate"},
      {text: "Raidplan Templates", link: "/resources/raidplantemplates"},
      {text: "Glossary", link: "/resources/glossary"},
    ],
  },
];

const extraLinks = [
  {text: "Directory", link: "https://materia.directory/"},
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "./docs",
	title: "Materia Raiding",
	description:
		"Materia Raiding is a community driven project to collate the various guide and tools created for raiding in the FF14 Materia Datacenter.",
	head: [["link", {rel: "icon", href: "/images/favicon.ico"}]],
	cleanUrls: true,
	ignoreDeadLinks: true,
	lastUpdated: true,
	metaChunk: true,
	sitemap: {
		hostname: 'https://materiaraiding.com',
		lastmodDateOnly: false
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/images/icons/materia.webp",
		outline: "deep",
		nav: [
			{text: "Home", link: "/"},
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
		],
		sidebar: generateFullSidebar(),
		search: {
			provider: "local",
		},
		socialLinks: [
			{icon: "discord", link: "https://discord.gg/EySn5dRj65"},
			{icon: "github", link: "https://github.com/materiaraiding/materiaraiding"},
		],
		editLink: {
			pattern: "https://github.com/materiaraiding/materiaraiding/edit/main/docs/:path",
			text: "Edit this page on GitHub",
		},
		footer: {
			message:
				"© SQUARE ENIX CO., LTD. All Rights Reserved | FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. | All content © their respective authors | Materia Raiding is a non-profit community-owned website.",
		},
	},
	markdown: {
		config: (md) => {
			md.use(customBlockPlugin, {
				tankLabel: "TANK",
				healerLabel: "HEALER",
				damageLabel: "DAMAGE",
				everyoneLabel: "EVERYONE",
			});
			md.use(imagePlugin);
			md.use(youtubeEmbedPlugin);
			md.use(timingWindowPlugin);
			md.use(glossaryPlugin);
			md.use(statusIconPlugin);
		},
	},
	rewrites: {
		'guides/chaotic/:slug*': 'chaotic/:slug*',
		'guides/ultimate/:slug*': 'ultimate/:slug*',
		'guides/savage/:slug*': 'savage/:slug*',
		'guides/extreme/:slug*': 'extreme/:slug*',
		'guides/criterion/:slug*': 'criterion/:slug*',
		'guides/unreal/:slug*': 'unreal/:slug*',
		'guides/fieldops/:slug*': 'fieldops/:slug*',
		'other/:slug*': 'unreal/:slug*',
	},
	vite: {
		optimizeDeps: {
			exclude: ["vitepress"],
		},
	},
});
