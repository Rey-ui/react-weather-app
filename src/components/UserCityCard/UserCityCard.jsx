import { NavLink } from "react-router-dom";
import WeatherIconIdentifier from "../WeatherIconIdentifier/WeatherIconIdentifier";
import { FiTrash } from "react-icons/fi";
import { LuWind } from "react-icons/lu";
import { FaDroplet } from "react-icons/fa6";
import css from "./UserCityCard.module.css";
const UserCityCard = ({
  city: { id, name, main, weather, wind },
  onDelete,
}) => {
  return (
    <div className={css.userCityCard}>
      <NavLink className={css.cityCardLink} to={`/city/${name}`}>
        <div className={css.cityCardUp}>
          <h3 className={css.cityCardName}>{name}</h3>
          <span className={css.cityCardTemp}>
            {Math.ceil(main.temp - 273.15)}°
          </span>
        </div>
        <div className={css.cityCardWeather}>
          <span className={css.cityCardWeatherText}>{weather[0].main}</span>
          <WeatherIconIdentifier
            iconClass={css.cityCardWeatherSvg}
            weather={weather[0].main}
          />
        </div>
        <ul className={css.cityCardInfo}>
          <li className={css.cityCardItem}>
            <span>Feels Like:</span>
            <span>{Math.ceil(main.feels_like - 273.15)}°</span>
          </li>
          <li className={css.cityCardItem}>
            <FaDroplet className={css.cityCardItemHumid} />
            <span>{main.humidity}%</span>
          </li>
          <li className={css.cityCardItem}>
            <LuWind className={css.cityCardItemWind} />
            <span>{wind.speed}mph</span>
          </li>
        </ul>
      </NavLink>
      <button
        className={css.cityCardBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        <FiTrash />
      </button>
    </div>
  );
};

export default UserCityCard;
