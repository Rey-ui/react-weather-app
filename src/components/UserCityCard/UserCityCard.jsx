import { NavLink } from "react-router-dom";
import WeatherIconIdentifier from "../WeatherIconIdentifier/WeatherIconIdentifier";

const UserCityCard = ({ city, onDelete }) => {
  return (
    <div>
      <NavLink to={`/city/${city.name}`}>
        {city.name}
        <span>{Math.ceil(city.main.temp - 273.15)}</span>
        <WeatherIconIdentifier weather={city.weather[0].main} />
      </NavLink>
      <button type="button" onClick={() => onDelete(city.id)}>
        X
      </button>
    </div>
  );
};

export default UserCityCard;
