import fs from 'fs';
import path from 'path';
import { difficulties } from './theme/components/lists/difficultyTypes';
import { externalLinks } from './external-links';
import { discoverGuides, toTitleCase } from './guide-index';

// Function to generate nav items for guide categories
export const generateGuidesNav = (): any[] => {
  const guidesDir = path.resolve('docs/guides');
  const dirs = fs.readdirSync(guidesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dir => dir.name);

  // Sort directories using the shared sorting function
  const sortedDirs = difficulties.sortGuides(dirs);

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
  const sortedCategories = difficulties.sortGuides(guideCategories);

  sortedCategories.forEach(category => {
    const categoryPath = path.join(guidesDir, category.name);
    const hasIndex = fs.existsSync(path.join(categoryPath, 'index.md'));

    sidebar['/'].push({
      text: toTitleCase(category.name),
      link: hasIndex ? `/${category.name}` : undefined,
      collapsed: false,
      items: discoverGuides(categoryPath)
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
        items: discoverGuides(categoryPath)
      }];
    });
  }

  // Add resources sidebar
  sidebar['/resources/'] = resourcesNav;

  return sidebar;
};

// Function to generate external links section for resources
export const generateExternalLinksSection = (): any => {
  // Only return the section if there are external links defined
  if (externalLinks.length === 0) {
    return null;
  }

  return {
    text: "External",
    items: externalLinks
  };
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