import { Fragment } from 'react';
import wineData from 'data/wine-data.json'
import { groupWineByClass } from 'utils';
import CalculationTable from 'components/CalculationTable';

const App = () => {
    const wineGroupsByClass = groupWineByClass(wineData);
    return (
        <Fragment>
            <CalculationTable 
                wineKey='Flavanoids'
                wineData={wineGroupsByClass}
            />
            {/* <CalculationTable 
                wineKey='Gamma'
                wineData={wineGroupsByClass}
            /> */}
        </Fragment>
    );
}

export default App;
