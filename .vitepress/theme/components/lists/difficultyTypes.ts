// Configuration for different difficulty types used in guides
// Each type includes its name, associated icon, CSS color class, and order for sorting

export interface DifficultyType {
	type: string;
	icon: string;
	colorClass: string;
	order: number;
	homeNavOrder: number;
	urlOverride?: string;
}

class DifficultyRegistry {
	private readonly _data: DifficultyType[] = [
		{ type: 'Chaotic', icon: '/images/icons/chaotic.webp', colorClass: 'chaotic-color', order: 5, homeNavOrder: 1 },
		{ type: 'Unreal', icon: '/images/icons/unreal.webp', colorClass: 'unreal-color', order: 6, homeNavOrder: 2 },
		{ type: 'Extreme', icon: '/images/icons/trial.webp', colorClass: 'extreme-color', order: 1, homeNavOrder: 3 },
		{ type: 'Savage', icon: '/images/icons/raid.webp', colorClass: 'savage-color', order: 2, homeNavOrder: 4 },
		{ type: 'Ultimate', icon: '/images/icons/highendduty.webp', colorClass: 'ultimate-color', order: 3, homeNavOrder: 5 },
		{ type: 'Field Ops', icon: '/images/icons/fieldops.webp', colorClass: 'fieldops-color', urlOverride: 'fieldops', order: 7, homeNavOrder: 7 },
		{ type: 'Dungeon', icon: '/images/icons/dungeon.webp', colorClass: 'dungeon-color', order: 4, homeNavOrder: 6 },
	];

	find(type: string): DifficultyType | undefined {
		return this._data.find(d => d.type === type);
	}

	get all(): DifficultyType[] {
		return this._data;
	}

	get sortedByHomeNav(): DifficultyType[] {
		return [...this._data].sort((a, b) => a.homeNavOrder - b.homeNavOrder);
	}

	sortGuides<T extends string | { name: string }>(items: T[]): T[] {
		// Create a lookup map for difficulty types with normalized keys (lowercase)
		// This avoids repeated searches through the data array
		const difficultyMap = new Map<string, number>();

		// Populate the map with both type and urlOverride as keys (normalized to lowercase)
		this._data.forEach(d => {
			difficultyMap.set(d.type.toLowerCase(), d.order);
			if (d.urlOverride) {
				difficultyMap.set(d.urlOverride.toLowerCase(), d.order);
			}
		});

		return [...items].sort((a, b) => {
			const nameA = typeof a === 'string' ? a : a.name;
			const nameB = typeof b === 'string' ? b : b.name;

			const orderA = difficultyMap.get(nameA.toLowerCase());
			const orderB = difficultyMap.get(nameB.toLowerCase());

			if (orderA !== undefined && orderB !== undefined) {
				return orderA - orderB;
			}
			if (orderA !== undefined) return -1;
			if (orderB !== undefined) return 1;
			return nameA.localeCompare(nameB);
		});
	}
}

export const difficulties = new DifficultyRegistry();
