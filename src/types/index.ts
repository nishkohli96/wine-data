/**
 * Some records in "wine-data.json" have fields that have
 * both string and number values like 0.45 and ".67", 
 * even though the value is numeric. 
 */
export type WineData = {
	Alcohol: number;
	'Malic Acid': number;
	Ash: number | string;
	'Alcalinity of ash': number;
	Magnesium: number;
	'Total phenols': number;
	Flavanoids: number | string;
	'Nonflavanoid phenols': number | string;
	Proanthocyanins: string;
	'Color intensity': number | string;
	Hue: number;
	'OD280/OD315 of diluted wines': number | string;
	Unknown: number;
}

export type WineGroup = Record<string, WineData[]>;

export type FrequencyMap = {
	value: number;
	count: number;
}