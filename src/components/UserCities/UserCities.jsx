import RefreshBtn from "../RefreshBtn/RefreshBtn";
import SearchCityForm from "../SearchCityForm/SearchCityForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import UserCitiesList from "../UserCitiesList/UserCitiesList";

const UserCities = ({ submit, cities, onDelete, refreshed }) => {
  return (
    <div>
      <SearchCityForm submit={submit} />
      {cities.length !== 0 ? (
        <div>
          <RefreshBtn refreshed={refreshed} />
          <UserCitiesList onDelete={onDelete} cities={cities} />
        </div>
      ) : (
        <p>There are no cities yet</p>
      )}
    </div>
  );
};

export default UserCities;
