import * as ELEMENTS from './elements.js';
import {Http} from 'http.js';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0){
        return alert('please enter a city name');
    }
    alert(CITY_NAME);
    const URL
};