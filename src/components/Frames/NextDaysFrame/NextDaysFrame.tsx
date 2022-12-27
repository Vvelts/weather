import { beautifyTime, CurrentWeather, getDayName, ForecastType } from '../../../types';
import './NextDaysFrame.scss'

type NextDaysFrameProps = {
    item: Omit<CurrentWeather, 'coord' | 'sys' | 'name'>
    type: ForecastType,
}

function NextDaysFrame({ item, type }: NextDaysFrameProps) {

    function getDayTitle() {
        switch (type) {
            case ForecastType.NEXTDAYS:
                return getDayName(new Date(item.dt * 1000));
            case ForecastType.TODAY:
            case ForecastType.TOMORROW:
                return beautifyTime(new Date(item.dt * 1000));
        }
    }

    return (
        <li className='next-days-frame'>
            <span className='next-days-frame__day-title'>{getDayTitle()}</span>
            <img
                src={require(`../../../images/weather-icons/${item.weather[0].icon}.svg`)}
                className='next-days-frame-forecast-image'
            />
            <span className='next-days-frame__temperature'>{Math.round(item.main.temp)}&deg;</span>
        </li>
    );
}

export default NextDaysFrame;