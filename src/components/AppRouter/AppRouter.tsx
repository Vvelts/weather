import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import ForecastPage from "../../pages/ForecastPage/ForecastPage";
import NextDays from "../../pages/NextDays";
import TodayPage from "../../pages/TodayPage";
import TomorrowPage from "../../pages/TomorrowPage";
import { ForecastType, WeatherContextType, WeatherForecast } from "../../types";

export const WeatherForecastContext = React.createContext<WeatherContextType>({
    weather: {
        current: null,
        next: null,
    },
    setWeather: (forecast: WeatherForecast) => { }
})

function AppRouter() {

    const [weather, setWeather] = useState<WeatherForecast>({
        current: null,
        next: null,
    });

    return (
        <WeatherForecastContext.Provider value={{ weather, setWeather }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index={true} element={<TodayPage />} />
                        <Route path="/tomorrow" element={<TomorrowPage />} />
                        <Route path="/nextdays" element={<NextDays />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </WeatherForecastContext.Provider>
    );
}

export default AppRouter;