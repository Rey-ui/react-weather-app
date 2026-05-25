import PopularCitiesList from "../PopularCitiesList/PopularCitiesList";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularCities = ({ cities }) => {
  return (
    <>
      <SectionTitle>Popular Cities</SectionTitle>
      <PopularCitiesList cities={cities} />
    </>
  );
};

export default PopularCities;
