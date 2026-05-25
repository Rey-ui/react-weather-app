import css from "./SectionTitle.module.css";

const SectionTitle = ({ children }) => {
  return <h2 className={css.sectionTitle}>{children}</h2>;
};

export default SectionTitle;
