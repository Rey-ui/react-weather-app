import { NavLink, useLocation } from "react-router-dom";
import WeatherIconIdentifier from "../WeatherIconIdentifier/WeatherIconIdentifier";

const PopularCityCard = ({ city }) => {
  const location = useLocation();
  return (
    <NavLink to={`/city/${city.name}`} state={location}>
      {city.name} <WeatherIconIdentifier weather={city.weather[0].main} />
    </NavLink>
  );
};

export default PopularCityCard;
