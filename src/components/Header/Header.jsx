import css from "./Header.module.css";
import { BsFillCloudsFill } from "react-icons/bs";
const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerWrapper}>
          <h1 className={css.headerTitle}>HyperClimate</h1>
          <BsFillCloudsFill className={css.headerSvg} />
        </div>
      </div>
    </header>
  );
};

export default Header;
