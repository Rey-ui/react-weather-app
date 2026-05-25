import { NavLink, useLocation } from "react-router-dom";
import WeatherIconIdentifier from "../WeatherIconIdentifier/WeatherIconIdentifier";
import css from "./PopularCityCard.module.css";
const PopularCityCard = ({ city: { name, weather, main } }) => {
  const location = useLocation();
  return (
    <NavLink
      to={`/city/${name}`}
      state={location}
      className={css.popularCityCard}
    >
      <div className={css.popularCityCardUp}>
        <h4 className={css.popularCityCardTitle}>{name}</h4>
        <span className={css.popularCityCardTemp}>
          {Math.ceil(main.temp - 273.15)}°
        </span>
      </div>
      <div className={css.popularCityCardDown}>
        <span className={css.popularCityCardWeather}>{weather[0].main}</span>
        <WeatherIconIdentifier
          iconClass={css.popularCityCardSvg}
          weather={weather[0].main}
        />
      </div>
    </NavLink>
  );
};

export default PopularCityCard;
