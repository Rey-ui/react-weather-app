import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const schema = Yup.object().shape({
  cityName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("pleas enter city name!"),
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
      <Form>
        <label>
          <Field type="text" name="cityName" />
          <ErrorMessage name="cityName" component="span" />
        </label>
        <button type="submit">add</button>
      </Form>
    </Formik>
  );
};

export default SearchCityForm;
