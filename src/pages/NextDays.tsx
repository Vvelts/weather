import { useContext } from "react";
import { WeatherForecastContext } from "../components/AppRouter/AppRouter";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";
import { Forecast, ForecastType } from "../types";
import ForecastPage from "./ForecastPage/ForecastPage";

function NextDays() {
    const { weather } = useContext(WeatherForecastContext);
    const date = new Date();

    const forecast = {
        ...weather?.next, list: weather?.next?.list.filter((item) => {
            let itemDate = new Date(item.dt * 1000);
            return (itemDate.toLocaleDateString() !== date.toLocaleDateString()
                && itemDate.getHours() === 9

            );
        }).slice(0, 4)
    }
    const currentWeather = weather?.current;

    const isLoading = forecast.list && currentWeather && forecast;

    return (
        !isLoading
            ? <LoadSpinner />
            : <ForecastPage
                currentWeather={currentWeather}
                forecast={forecast as Forecast}
                type={ForecastType.NEXTDAYS}
            />
    );
}

export default NextDays;