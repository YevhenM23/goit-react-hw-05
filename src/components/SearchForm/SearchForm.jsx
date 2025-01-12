import { Field, Form, Formik } from "formik";

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
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search Movie</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
