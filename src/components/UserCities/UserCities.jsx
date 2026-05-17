import SearchCityForm from "../SearchCityForm/SearchCityForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import UserCitiesList from "../UserCitiesList/UserCitiesList";

const UserCities = ({ submit, cities, onDelete }) => {
  return (
    <div>
      <SectionTitle>Tracked Cities</SectionTitle>
      <SearchCityForm submit={submit} />
      {cities.length !== 0 ? (
        <UserCitiesList onDelete={onDelete} cities={cities} />
      ) : (
        <p>There are no cities yet</p>
      )}
    </div>
  );
};

export default UserCities;
