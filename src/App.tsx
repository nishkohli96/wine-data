import wineData from 'data/wine-data.json'
import { groupWineByClass } from 'utils';

const App = () => {
    const wineGroupsByClass = groupWineByClass(wineData);
    return (
        <p>ji</p>
    );
}

export default App;
