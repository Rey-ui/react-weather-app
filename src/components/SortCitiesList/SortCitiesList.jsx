import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import css from "./SortCitiesList.module.css";
import clsx from "clsx";
const SortCitiesList = ({ sortValue, sort, switchIndicator }) => {
  return (
    <div
      onClick={(e) => {
        sort(e.target.name);
      }}
    >
      <button
        className={clsx({
          [css.active]: sortValue === "cityName",
        })}
        type="button"
        name="cityName"
      >
        name
        {sortValue === "cityName" &&
          (switchIndicator === "asc" ? <FaArrowUp /> : <FaArrowDown />)}
      </button>
      <button
        className={clsx({
          [css.active]: sortValue === "cityTemperature",
        })}
        type="button"
        name="cityTemperature"
      >
        temperature
      </button>
      <button
        className={clsx({
          [css.active]: sortValue === "cityWindSpeed",
        })}
        type="button"
        name="cityWindSpeed"
      >
        Wind speed
      </button>
      <button
        className={clsx(sortValue === "cityHumidity" && [css.active])}
        type="button"
        name="cityHumidity"
      >
        humidity
      </button>
    </div>
  );
};

export default SortCitiesList;
