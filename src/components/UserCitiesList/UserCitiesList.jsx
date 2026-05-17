import UserCityCard from "../UserCityCard/UserCityCard";

const UserCitiesList = ({ cities, onDelete }) => {
  return (
    <ul>
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
