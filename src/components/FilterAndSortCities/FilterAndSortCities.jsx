import FilterCitiesList from "../FilterCitiesList/FilterCitiesList";
import SortCitiesList from "../SortCitiesList/SortCitiesList";

const FilterAndSortCities = ({
  clearCities,
  value,
  change,
  sortValue,
  sort,
  switchIndicator,
}) => {
  return (
    <aside>
      <h3>Filter & Sort</h3>
      <div>
        <div>
          <FilterCitiesList value={value} change={change} />
        </div>
        <div>
          <SortCitiesList
            sortValue={sortValue}
            sort={sort}
            switchIndicator={switchIndicator}
          />
        </div>
        <button type="button" onClick={clearCities}>
          Clear All
        </button>
      </div>
    </aside>
  );
};

export default FilterAndSortCities;
