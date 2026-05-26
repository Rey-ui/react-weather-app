import Loader from "../Loader/Loader";
import RefreshBtn from "../RefreshBtn/RefreshBtn";
import SearchCityForm from "../SearchCityForm/SearchCityForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import UserCitiesList from "../UserCitiesList/UserCitiesList";
import css from "./UserCities.module.css";
const UserCities = ({
  submit,
  cities,
  onDelete,
  refreshed,
  citiesListLoader,
}) => {
  return (
    <div className={css.userCities}>
      <SearchCityForm submit={submit} />
      {cities.length !== 0 ? (
        <div className={css.userCitiesMain}>
          <RefreshBtn refreshed={refreshed} />
          {citiesListLoader && <Loader />}
          <UserCitiesList onDelete={onDelete} cities={cities} />
        </div>
      ) : (
        <p className={css.userCitiesAlternative}>There are no cities yet</p>
      )}
    </div>
  );
};

export default UserCities;
