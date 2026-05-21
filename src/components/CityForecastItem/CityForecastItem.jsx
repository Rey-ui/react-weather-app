const CityForecastItem = ({ oneDay }) => {
  console.log(oneDay);
  return (
    <div>
      {oneDay.tempMax}/{oneDay.tempMin}
    </div>
  );
};

export default CityForecastItem;
