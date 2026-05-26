import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { LuBookText, LuWind } from "react-icons/lu";
import css from "./SortCitiesList.module.css";
import clsx from "clsx";
import { FaDroplet } from "react-icons/fa6";
import { CiTempHigh } from "react-icons/ci";
const SortCitiesList = ({ sortValue, sort, switchIndicator }) => {
  const changeArrow = (value) => {
    return switchIndicator === "asc" && sortValue === value;
  };
  return (
    <ul
      className={css.sortCitiesList}
      onClick={(e) => {
        sort(e.target.closest("button").name);
      }}
    >
      <li className={css.sortCitiesItem}>
        <button
          className={clsx(css.sortCitiesBtn, {
            [css.active]: sortValue === "cityName" && css.active,
          })}
          type="button"
          name="cityName"
        >
          <div className={css.sortCitiesBtnContent}>
            <LuBookText />
            <span className={css.sortCitiesBtnText}>Name</span>
          </div>

          {changeArrow("cityName") ? (
            <FaArrowUp className={css.sortCitiesBtnSvg} />
          ) : (
            <FaArrowDown className={css.sortCitiesBtnSvg} />
          )}
        </button>
      </li>
      <li className={css.sortCitiesItem}>
        <button
          className={clsx(css.sortCitiesBtn, {
            [css.active]: sortValue === "cityTemperature",
          })}
          type="button"
          name="cityTemperature"
        >
          <div className={css.sortCitiesBtnContent}>
            <CiTempHigh className={css.sortCitiesBtnSvgFill} />
            <span className={css.sortCitiesBtnText}>Temperature</span>
          </div>

          {changeArrow("cityTemperature") ? (
            <FaArrowUp className={css.sortCitiesBtnSvg} />
          ) : (
            <FaArrowDown className={css.sortCitiesBtnSvg} />
          )}
        </button>
      </li>
      <li className={css.sortCitiesItem}>
        <button
          className={clsx(css.sortCitiesBtn, {
            [css.active]: sortValue === "cityWindSpeed",
          })}
          type="button"
          name="cityWindSpeed"
        >
          <div className={css.sortCitiesBtnContent}>
            <LuWind />
            <span className={css.sortCitiesBtnText}>Wind speed</span>
          </div>

          {changeArrow("cityWindSpeed") ? (
            <FaArrowUp className={css.sortCitiesBtnSvg} />
          ) : (
            <FaArrowDown className={css.sortCitiesBtnSvg} />
          )}
        </button>
      </li>
      <li className={css.sortCitiesItem}>
        <button
          className={clsx(
            css.sortCitiesBtn,
            sortValue === "cityHumidity" && [css.active],
          )}
          type="button"
          name="cityHumidity"
        >
          <div className={css.sortCitiesBtnContent}>
            <FaDroplet className={css.sortCitiesBtnSvgFill} />
            <span className={css.sortCitiesBtnText}>Humidity</span>
          </div>

          {changeArrow("cityHumidity") ? (
            <FaArrowUp className={css.sortCitiesBtnSvg} />
          ) : (
            <FaArrowDown className={css.sortCitiesBtnSvg} />
          )}
        </button>
      </li>
    </ul>
  );
};

export default SortCitiesList;
