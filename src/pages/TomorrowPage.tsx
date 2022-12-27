import { useContext, useMemo } from "react";
import { WeatherForecastContext } from "../components/AppRouter/AppRouter";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";
import { CurrentWeather, Forecast, ForecastType } from "../types";
import ForecastPage from "./ForecastPage/ForecastPage";

function TomorrowPage() {
    const { weather } = useContext(WeatherForecastContext);
    const date = new Date();
    date.setDate(date.getDate() + 1);

    const forecast = {
        ...weather?.next, list: weather?.next?.list.filter((item) => {
            return (new Date(item.dt * 1000).toLocaleDateString() === date.toLocaleDateString());
        }).slice(3, 7)
    }

    const currentWeather: CurrentWeather | null = useMemo(() => {
        if (forecast?.list && forecast.list.length) {
            return forecast.list[0] as CurrentWeather;
        }
        return null;
    }, [forecast])

    const isLoading = forecast.list && forecast && currentWeather;

    return (
        !isLoading
            ? <LoadSpinner />
            : <ForecastPage
                currentWeather={currentWeather}
                forecast={forecast as Forecast}
                type={ForecastType.TOMORROW}
            />
    );
}

export default TomorrowPage;