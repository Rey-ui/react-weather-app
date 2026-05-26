import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./SearchCityForm.module.css";
import * as Yup from "yup";
import { IoAddOutline } from "react-icons/io5";
const schema = Yup.object().shape({
  cityName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Pleas enter city name!"),
});

const SearchCityForm = ({ submit }) => {
  const inicialValues = {
    cityName: "",
  };
  const onSubmit = (values, actions) => {
    submit(values.cityName);
    actions.resetForm();
  };
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={inicialValues}
      validationSchema={schema}
    >
      <Form className={css.searchCityForm}>
        <label className={css.searchCityLabel}>
          <Field className={css.searchCityInput} type="text" name="cityName" />
          <ErrorMessage
            className={css.searchCityError}
            name="cityName"
            component="span"
          />
        </label>
        <button type="submit" className={css.searchCityBtn}>
          <IoAddOutline />
          <span className={css.searchCityBtnText}>Add</span>
        </button>
      </Form>
    </Formik>
  );
};

export default SearchCityForm;
