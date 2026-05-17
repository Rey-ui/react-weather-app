import PopularCitiesList from "../PopularCitiesList/PopularCitiesList";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularCities = ({ cities }) => {
  return (
    <div>
      <SectionTitle>Popular Cities</SectionTitle>
      <PopularCitiesList cities={cities} />
    </div>
  );
};

export default PopularCities;
