import React from 'react';

import { Cards, Chart, CountryPicker, Maps} from './components';
import styles from './App.module.css';
import { fetchData, stateData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        data1: {},
        country: '',

    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        const data1 = await stateData();

        console.log(data1);

        this.setState({data: fetchedData});
        this.setState({data1: stateData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
    }

    handleStateChange = async (state) => {
        const fetchedState = await stateData(state);

        this.setState({data: fetchedState, state: state});
    }

    render(){
        const { data, data1, country } = this.state;

        return(
            <div className={styles.container}> 
                <img className={styles.image} src={coronaImage} alt="COVID19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <Maps data={data1}/>
            </div>
        );
    }
}

export default App;