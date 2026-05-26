import UserCityCard from "../UserCityCard/UserCityCard";
import css from "./UserCitiesList.module.css";
const UserCitiesList = ({ cities, onDelete }) => {
  return (
    <ul className={css.userCitiesList}>
      {cities.map((city) => {
        return (
          <li key={city.id}>
            <UserCityCard onDelete={onDelete} city={city} />
          </li>
        );
      })}
    </ul>
  );
};

export default UserCitiesList;
