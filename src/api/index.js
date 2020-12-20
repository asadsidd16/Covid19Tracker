import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const url_states = 'https://disease.sh/v3/covid-19/states';



export const stateData = async () => {
    let response;
    try{
        response = await axios.get(url_states);
        return response;
    
    }catch(error){
        console.log("Something is not quite right...");
    }
    const {data: {source, data}} = response;
    const hasData = Array.isArray(data) && data.length > 0;
    if(!hasData) return;
    return {
        source,
        data,
    };
   
}

export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
        
        return { confirmed, recovered, deaths, lastUpdate };
        
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;
    } catch(error){

    }
}

export const fetchCountries = async () => {
    try{
        const { data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch(error){
        console.log(error);
    }
}

export const fetchStates = async () => {
    try{
        const {data: {state}} = await axios.get(`${url_states}/states`);
        return state.map((states) => states.name);
    }
    catch(error){
        console.log(error);
    }
}