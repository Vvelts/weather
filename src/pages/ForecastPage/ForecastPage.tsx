import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { WeatherForecastContext } from '../../components/AppRouter/AppRouter';
import NextDaysFrame from '../../components/Frames/NextDaysFrame/NextDaysFrame';
import TodayForecastFrame from '../../components/Frames/TodayForecastFrame/TodayForecastFrame';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import { CurrentWeather, Forecast, ForecastType } from '../../types';
import './ForecastPage.scss'

type ForecastPageProps = {
    currentWeather: CurrentWeather,
    forecast: Forecast,
    type: ForecastType,
}

function ForecastPage({ forecast, currentWeather, type }: ForecastPageProps) {

    return (
        <div className="page">
            <div className='content'>
                <TodayForecastFrame item={currentWeather} />
                <ul className='days-list'>
                    {forecast?.list.map((item, index) => {
                        return (
                            <NextDaysFrame
                                key={index}
                                item={item}
                                type={type}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default memo(ForecastPage);