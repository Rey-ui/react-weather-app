import CityForecastItem from "../CityForecastItem/CityForecastItem";
import css from "./CityForecastList.module.css";
const CityForecastList = ({ cityForecast }) => {
  return (
    <ul className={css.forecastList}>
      {cityForecast.map((oneDay) => {
        return (
          <li className={css.forecastItem} key={oneDay.dt}>
            <CityForecastItem oneDay={oneDay} />
          </li>
        );
      })}
    </ul>
  );
};

export default CityForecastList;
