import { NavLink } from "react-router-dom";

const UserCityCard = ({ city, onDelete }) => {
  return (
    <div>
      <NavLink to={`/city/${city.id}`}>{city.name}</NavLink>
      <button type="button" onClick={() => onDelete(city.id)}>
        X
      </button>
    </div>
  );
};

export default UserCityCard;
