import { Router } from 'express';
import { getCurrentWeatherByCoordinates, getForecastByCoordinates } from '../controllers/weather.controller';

const router = Router();

router.get('/current', getCurrentWeatherByCoordinates);

router.get('/forecast', getForecastByCoordinates);

export default router;