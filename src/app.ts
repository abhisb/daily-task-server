import express, { Request, Response, NextFunction, json } from 'express';
import WeatherRouter from './routes/weather.routes';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(json());
app.get('/', (req, res) => {
    res.send('My first NodeJS app');
});

app.use('/api/weather', WeatherRouter);

app.listen(PORT, () => console.log('Application running at PORT ', PORT));