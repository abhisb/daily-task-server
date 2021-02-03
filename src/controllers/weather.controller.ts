import axios from 'axios';
import { RequestHandler } from 'express';
import { WEATHER_APIS, WEATHER_API_KEY } from '../constants/external-api.constants';


export const getCurrentWeatherByCoordinates: RequestHandler = async (req, res) => {
    const { latitude, longitude } = req.query;
    const url = `${WEATHER_APIS.CURRENT}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`;
    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        // axios.get(url).then(resp => console.log('Response data: => ', resp.data));
        if (!weatherData) {
            res.sendStatus(400);
        }
        res.send(weatherData);
    } catch (e) {
        console.error('Error occured: ', e);
        res.sendStatus(400);
    }
};

export const getForecastByCoordinates: RequestHandler = async (req, res) => {
    const { latitude, longitude } = req.query;
    const url = `${WEATHER_APIS.FORECAST}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric&cnt=1`;
    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        console.log('Weather data', weatherData);
        // axios.get(url).then(resp => console.log('Response data: => ', resp.data));
        if (!weatherData) {
            res.sendStatus(400);
        }
        res.send(weatherData);
    } catch (e) {
        console.error('Error occured: ', e);
        res.sendStatus(400);
    }
};