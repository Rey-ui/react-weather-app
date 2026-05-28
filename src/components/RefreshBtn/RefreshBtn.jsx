import { BsArrowRepeat } from "react-icons/bs";
import css from "./RefreshBtn.module.css";

const RefreshBtn = ({ refreshed }) => {
  return (
    <button className={css.refreshBtn} type="button" onClick={refreshed}>
      <BsArrowRepeat />
      <span>Refresh</span>
    </button>
  );
};

export default RefreshBtn;
