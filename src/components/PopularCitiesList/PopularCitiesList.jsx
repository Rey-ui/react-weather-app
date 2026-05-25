import PopularCityCard from "../PopularCityCard/PopularCityCard";
import css from "./PopularCitiesList.module.css";
const PopularCitiesList = ({ cities }) => {
  return (
    <ul className={css.popularList}>
      {cities.map((city) => {
        return (
          <li className={css.popularItem} key={city.id}>
            <PopularCityCard city={city} />
          </li>
        );
      })}
    </ul>
  );
};

export default PopularCitiesList;
