// Configuration for different difficulty types used in guides
// Each type includes its name, associated icon, CSS color class, and order for sorting

export const difficultyTypes = [
	{ type: 'Chaotic', icon: '/images/icons/chaotic.webp', colorClass: 'chaotic-color', order: 5, homeNavOrder: 1 },
	{ type: 'Unreal', icon: '/images/icons/unreal.webp', colorClass: 'unreal-color', order: 6, homeNavOrder: 2 },
	{ type: 'Extreme', icon: '/images/icons/trial.webp', colorClass: 'extreme-color', order: 1, homeNavOrder: 3 },
	{ type: 'Savage', icon: '/images/icons/raid.webp', colorClass: 'savage-color', order: 2, homeNavOrder: 4 },
	{ type: 'Ultimate', icon: '/images/icons/highendduty.webp', colorClass: 'ultimate-color', order: 3,	homeNavOrder: 5 },
	{ type: 'Field Ops', icon: '/images/icons/fieldops.webp', colorClass: 'fieldops-color', urlOverride: 'fieldops', order: 7, homeNavOrder: 7 },
	{ type: 'Dungeon', icon: '/images/icons/dungeon.webp', colorClass: 'dungeon-color', order: 4, homeNavOrder: 6 },
];