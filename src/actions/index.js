import axios from 'axios';

// not masked
const API_KEY = '36022ed3e5f66e9394a066e2ae01606f';

const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = ROOT_URL + '&q=' + city + ',us';
    const request = axios.get(url);

    console.log('Request:' , request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

