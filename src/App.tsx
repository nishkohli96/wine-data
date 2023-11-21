import { Fragment } from 'react';
import CalculationTable from 'components/CalculationTable';
import { calculateGamma, groupWineByClass } from 'utils';
import { WineDataExtended } from 'types';
import wineData from 'data/wine-data.json'

const App = () => {
    const wineDataWithGamma: WineDataExtended[] = wineData.map(wd => ({
        ...wd,
        Gamma: calculateGamma(wd),
    }));
    const wineGroupsByClass = groupWineByClass(wineDataWithGamma);
    return (
        <Fragment>
            <CalculationTable 
                wineKey='Flavanoids'
                wineData={wineGroupsByClass}
            />
            <CalculationTable 
                wineKey='Gamma'
                wineData={wineGroupsByClass}
            />
        </Fragment>
    );
}

export default App;
