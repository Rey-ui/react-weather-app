import css from "./RefreshBtn.module.css";

const RefreshBtn = ({ refreshed }) => {
  return (
    <button className={css.refreshBtn} type="button" onClick={refreshed}>
      Refresh
    </button>
  );
};

export default RefreshBtn;
