import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWeather, searchCityForecastWeather } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CityForecastList from "../CityForecastList/CityForecastList";

const CityForecast = () => {
  const { cityName } = useParams();
  const [cityForecast, setCityForecast] = useState([]);
  const [loader, setloader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getCityForecastWeather() {
      try {
        setloader(true);
        const data = await searchCityForecastWeather(cityName);
        const grouped = {};

        data.forEach((item) => {
          const date = item.dt_txt.split(" ")[0];

          if (!grouped[date]) {
            grouped[date] = [];
          }

          grouped[date].push(item);
        });
        let newArr = [];
        Object.entries(grouped)
          .slice(0, 5)
          .forEach(([date, items]) => {
            const temps = items.map((i) => i.main.temp);

            const tempMin = Math.min(...temps);
            const tempMax = Math.max(...temps);

            const midday =
              items.find((i) => i.dt_txt.includes("12:00:00")) || items[0];

            const weather = midday.weather;
            newArr.push({ tempMin, tempMax, midday, weather });
          });
        setCityForecast(newArr);
      } catch {
        setError(true);
      } finally {
        setloader(false);
      }
    }
    getCityForecastWeather();
  }, []);
  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {cityForecast && <CityForecastList cityForecast={cityForecast} />}
    </div>
  );
};

export default CityForecast;
