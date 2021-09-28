import CoronaData from './coronaFetch';
import CoronaCardIformation from './coronaCard';

function createIteratedDataofCorona(){   
    return (<div class="wrapper-containerTab" id="wrapperContainer">
        <CoronaData.map()/>
    </div>)
    
}

export default;