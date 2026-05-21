import CityForecastItem from "../CityForecastItem/CityForecastItem";

const CityForecastList = ({ cityForecast }) => {
  return (
    <ul>
      {cityForecast.map((oneDay) => {
        return (
          <li key={oneDay.dt}>
            <CityForecastItem oneDay={oneDay} />
          </li>
        );
      })}
    </ul>
  );
};

export default CityForecastList;
