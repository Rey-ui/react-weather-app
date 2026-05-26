import css from "./FilterCities.module.css";

const FilterCities = ({ value, change }) => {
  return (
    <label className={css.FilterCities}>
      <h3 className={css.FilterCitiesTitle}>Filter By Name</h3>
      <input
        className={css.FilterCitiesInput}
        type="text"
        value={value}
        onChange={(e) => change(e.target.value)}
      />
    </label>
  );
};

export default FilterCities;
