import { NavLink } from "react-router-dom";

const PopularCityCard = ({ city }) => {
  return <NavLink to={`/city/${city.id}`}>{city.name}</NavLink>;
};

export default PopularCityCard;
