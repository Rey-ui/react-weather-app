import PopularCityCard from "../PopularCityCard/PopularCityCard";

const PopularCitiesList = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => {
        return (
          <li key={city.id}>
            <PopularCityCard city={city} />
          </li>
        );
      })}
    </ul>
  );
};

export default PopularCitiesList;
