import FilterCities from "../FilterCities/FilterCities";
import SortCitiesList from "../SortCitiesList/SortCitiesList";
import { VscSettings } from "react-icons/vsc";
import css from "./FilterAndSortCities.module.css";
const FilterAndSortCities = ({
  clearCities,
  value,
  change,
  sortValue,
  sort,
  switchIndicator,
}) => {
  return (
    <aside className={css.citiesBar}>
      <h3 className={css.citiesBarTitle}>
        <VscSettings /> <span>Filter & Sort</span>
      </h3>
      <div className={css.citiesBarContent}>
        <div className={css.citiesBarFilters}>
          <FilterCities value={value} change={change} />
          <div>
            <h3 className={css.citiesBarSortTitle}>Sort By</h3>

            <SortCitiesList
              sortValue={sortValue}
              sort={sort}
              switchIndicator={switchIndicator}
            />
          </div>
        </div>
        <button
          className={css.citiesBarClearBtn}
          type="button"
          onClick={clearCities}
        >
          Clear All
        </button>
      </div>
    </aside>
  );
};

export default FilterAndSortCities;
