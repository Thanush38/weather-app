import * as ELEMENTS from './elements.js';
import {Http} from './http.js';
const APP_ID = '4d1032d13b26dd5bd552092a7b5a8f93'
ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0){
        return alert('please enter a city name');
    }
    alert(CITY_NAME);
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;

    http.fetchData(URL)
    .then(responseData => {

    })
    .catch(error => alert('error'));
};