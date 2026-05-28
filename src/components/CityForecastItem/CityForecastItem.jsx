import WeatherIconIdentifier from "../WeatherIconIdentifier/WeatherIconIdentifier";
import css from "./CityForecastItem.module.css";
const CityForecastItem = ({
  oneDay: { midday, tempMax, tempMin, weather },
}) => {
  return (
    <>
      <h3 className={css.forecastCardDate}>
        {midday.dt_txt.split(" ")[0].slice(5)}
      </h3>
      <div className={css.forecastCardWeather}>
        <span>{weather[0].main}</span>
        <WeatherIconIdentifier
          iconClass={css.forecastCardWeatherSvg}
          weather={weather[0].main}
        />
      </div>
      <div className={css.forecastCardTemps}>
        <span className={css.forecastCardTemp}>
          {Math.ceil(tempMax - 273.15)}°
        </span>
        <span className={css.forecastCardTempSlash}> | </span>
        <span className={css.forecastCardTemp}>
          {Math.ceil(tempMin - 273.15)}°
        </span>
      </div>
    </>
  );
};

export default CityForecastItem;
