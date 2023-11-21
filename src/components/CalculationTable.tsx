import { Fragment } from 'react';
import { WineDataExtended, WineGroup, WineDataSet } from 'types';
import { calculateMean, calculateMedian, calculateMode } from 'utils';

interface CalculationTableProps {
	wineKey: keyof WineDataExtended;
	wineData: WineGroup;
}

const CalculationTable = ({ wineKey, wineData }: CalculationTableProps) => {
	const classValues = Object.keys(wineData);
	let fieldDataSet: WineDataSet = {};

	for (let key in wineData) {
		fieldDataSet[key] = wineData[key].map((wine) => Number(wine[wineKey]));
	}

	return (
		<Fragment>
			<h4 className="heading">{wineKey}</h4>
			<table className="table">
				<thead>
					<tr className="header-row">
						<td className="cell header-cell">Measure</td>
						{classValues.map((cval, idx) => (
							<td
								className="cell header-cell"
								key={idx}
							>{`Class ${cval}`}</td>
						))}
					</tr>
				</thead>
				<tbody>
					<tr className="table-data-row">
						<td className="cell header-cell">{wineKey} Mean</td>
						{Object.values(fieldDataSet).map((vals, index) => (
							<td className="cell" key={index}>
								{calculateMean(vals)}
							</td>
						))}
					</tr>
					<tr className="table-data-row">
						<td className="cell header-cell">{wineKey} Median</td>
						{Object.values(fieldDataSet).map((vals, index) => (
							<td className="cell" key={index}>
								{calculateMedian(vals)}
							</td>
						))}
					</tr>
					<tr className="table-data-row">
						<td className="cell header-cell">{wineKey} Mode</td>
						{Object.values(fieldDataSet).map((vals, index) => (
							<td className="cell" key={index}>
								{calculateMode(vals)}
							</td>
						))}
					</tr>
				</tbody>
			</table>
		</Fragment>
	);
};

export default CalculationTable;
