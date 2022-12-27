import { useContext, useMemo } from "react";
import { WeatherForecastContext } from "../components/AppRouter/AppRouter";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";
import { Forecast, ForecastType } from "../types";
import ForecastPage from "./ForecastPage/ForecastPage";

function TodayPage() {

    const { weather } = useContext(WeatherForecastContext);

    const forecast = { ...weather?.next, list: weather?.next?.list.slice(0, 4) }
    const currentWeather = weather?.current;

    const isLoading = forecast.list && currentWeather && forecast;

    return (
        !isLoading
            ? <LoadSpinner />
            : <ForecastPage
                currentWeather={currentWeather}
                forecast={forecast as Forecast}
                type={ForecastType.TODAY}
            />
    );
}

export default TodayPage;