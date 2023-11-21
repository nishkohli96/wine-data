import { WineData, WineDataExtended, WineGroup, FrequencyMap } from 'types';

export function groupWineByClass(wines: WineDataExtended[]): WineGroup {
	let wineGroup: WineGroup = {};
	wines.map((wine) => {
		if (wineGroup[`${wine.Alcohol}`]) {
			wineGroup[`${wine.Alcohol}`] = [...wineGroup?.[wine.Alcohol], wine];
		} else {
			wineGroup[`${wine.Alcohol}`] = [wine];
		}
	});
	return wineGroup;
}

/* Mean */
export function calculateMean(dataSet: number[]): string {
	const totalSum = dataSet.reduce(
		(sum: number, value: number) => sum + Number(value),
		0
	);
	return (totalSum / dataSet.length).toFixed(3);
}

function frequencyMap(dataSet: number[]): Record<string, FrequencyMap> {
	let freqMap: Record<string, FrequencyMap> = {};
	dataSet.forEach((e) => {
		if (!Boolean(freqMap[`${e}`])) {
			freqMap[`${e}`] = {
				value: e,
				count: 0,
			};
		} else {
			freqMap[`${e}`] = {
				...freqMap[`${e}`],
				count: (freqMap[`${e}`].count += 1),
			};
		}
	});
	return freqMap;
}

/* Mode */
export function calculateMode(dataSet: number[]): string {
	const freqMap = frequencyMap(dataSet);
	const sortedByCountDesc = Object.values(freqMap).sort((a, b) =>
		a.count - b.count > 0 ? -1 : 1
	);
	return sortedByCountDesc[0].value.toFixed(3);
}

/* Median */
export function calculateMedian(dataSet: number[]): string {
	const sortedArray = dataSet.sort((a, b) => (a - b > 0 ? 1 : -1));
	const arrayLength = sortedArray.length;
	if (arrayLength % 2 === 1) {
		return sortedArray[Math.floor(arrayLength / 2)].toFixed(3);
	}
	return (
		(sortedArray[arrayLength / 2 - 1] + sortedArray[arrayLength / 2]) /
		2
	).toFixed(3);
}

/** Gamma */
export function calculateGamma(wine: WineData): string {
	const product = Number(wine['Ash']) * Number(wine['Hue']);
	return (product /(Number(wine['Magnesium']))).toFixed(3)
}