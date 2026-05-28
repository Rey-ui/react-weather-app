import { FaArrowUpFromWaterPump, FaDroplet } from "react-icons/fa6";
import WeatherIconIdentifier from "../WeatherIconIdentifier/WeatherIconIdentifier";
import css from "./CityDetails.module.css";
import { IoMdSpeedometer } from "react-icons/io";
import { LuSunrise, LuSunset, LuWind } from "react-icons/lu";
function formatCityTime(unixTime, timezoneOffset) {
  const date = new Date((unixTime + timezoneOffset) * 1000);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}
const CityDetails = ({
  city: {
    name,
    coord: { lon, lat },
    main: {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      sea_level,
    },
    timezone,
    sys: { country, sunrise, sunset },
    weather,
    wind,
  },
}) => {
  return (
    <div className={css.cityDetails}>
      <div className={css.cityDetailsHero}>
        <div className={css.heroMain}>
          <div className={css.heroUp}>
            <h3 className={css.heroMainTitle}>{name}</h3>
            <h2 className={css.heroMainTemp}>{Math.ceil(temp - 273.15)}°</h2>
          </div>
          <div className={css.heroMainDown}>
            <div className={css.heroMainMaxMin}>
              <span className={css.heroMainMaxMinTemp}>
                {Math.ceil(temp_min - 273.15)}°
              </span>
              <span className={css.heroMainMaxMinTemp}>/</span>
              <span className={css.heroMainMaxMinTemp}>
                {Math.ceil(temp_max - 273.15)}°
              </span>
            </div>
            <div className={css.heroMainFeels}>
              <span className={css.heroMainFeelsName}>Feels Like:</span>
              <span className={css.heroMainFeelsTemp}>
                {Math.ceil(feels_like - 273.15)}°
              </span>
            </div>
          </div>
        </div>
        <div className={css.heroWeather}>
          <h3 className={css.heroWeatherTitle}>
            <span className={css.heroWeatherTitleText}>{weather[0].main}</span>
            <WeatherIconIdentifier
              iconClass={css.heroWeatherTitleSvg}
              weather={weather[0].main}
            />
          </h3>
          <p className={css.heroWeatherDesc}>{weather[0].description}</p>
        </div>
        <div className={css.heroCoords}>
          <span>{lon.toFixed(2)}</span>|<span>{lat.toFixed(2)}</span>
        </div>
      </div>
      <ul className={css.cityDetailsList}>
        <li className={css.cityDetailsItem}>
          <div className={css.cityDetailsItemSvgCont}>
            <FaDroplet className={css.cityDetailsItemSvgHumid} />
          </div>
          <div className={css.cityDetailsItemContent}>
            <h3 className={css.cityDetailsItemTitle}>Humidity</h3>
            <span className={css.cityDetailsItemText}>{humidity}%</span>
          </div>
        </li>
        <li className={css.cityDetailsItem}>
          <div className={css.cityDetailsItemSvgCont}>
            <IoMdSpeedometer className={css.cityDetailsItemSvgPres} />
          </div>
          <div className={css.cityDetailsItemContent}>
            <h3 className={css.cityDetailsItemTitle}>Pressure</h3>
            <span className={css.cityDetailsItemText}>{pressure}hPa</span>
          </div>
        </li>
        <li className={css.cityDetailsItem}>
          <div className={css.cityDetailsItemSvgCont}>
            <LuWind className={css.cityDetailsItemSvgWind} />
          </div>
          <div className={css.cityDetailsItemContent}>
            <h3 className={css.cityDetailsItemTitle}>Wind</h3>
            <span className={css.cityDetailsItemText}>{wind.speed}mph</span>
          </div>
        </li>
        <li className={css.cityDetailsItem}>
          <div className={css.cityDetailsItemSvgCont}>
            <FaArrowUpFromWaterPump className={css.cityDetailsItemSvgSea} />
          </div>
          <div className={css.cityDetailsItemContent}>
            <h3 className={css.cityDetailsItemTitle}>Sea level</h3>
            <span className={css.cityDetailsItemText}>{sea_level}msl</span>
          </div>
        </li>
        <li className={css.cityDetailsItem}>
          <div className={css.cityDetailsItemSvgCont}>
            <LuSunrise className={css.cityDetailsItemSvgSun} />
          </div>
          <div className={css.cityDetailsItemContent}>
            <h3 className={css.cityDetailsItemTitle}>Sunrise</h3>
            <span className={css.cityDetailsItemText}>
              {formatCityTime(sunrise, timezone)}
            </span>
          </div>
        </li>
        <li className={css.cityDetailsItem}>
          <div className={css.cityDetailsItemSvgCont}>
            <LuSunset className={css.cityDetailsItemSvgSun} />
          </div>
          <div className={css.cityDetailsItemContent}>
            <h3 className={css.cityDetailsItemTitle}>Sunset</h3>
            <span className={css.cityDetailsItemText}>
              {formatCityTime(sunset, timezone)}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CityDetails;
