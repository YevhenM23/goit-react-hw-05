import { Field, Form, Formik } from "formik";

const SearchForm = ({ handleChangeQuery, query }) => {
  const onSubmit = (values) => {
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

/* //   const
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get("query") ?? "";

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim() === "") {
//       alert("Please enter a valid movie name.");
//       return;
//     } else onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setSearchParams({ query: e.target.value })}
//         placeholder="Search for a movie"
//       />
//       <button type="submit">Search Movie</button>
//     </form>
//   );
// };

// export default SearchForm; */
