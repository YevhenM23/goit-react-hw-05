import { Field, Form, Formik } from "formik";
import s from "./SearchForm.module.css";

const SearchForm = ({ handleChangeQuery, query }) => {
  const onSubmit = (values) => {
    if (values.query === "") {
      alert("Please enter a valid movie name.");
    }
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button className={s.formBtn} type="submit">
            Search Movie
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
