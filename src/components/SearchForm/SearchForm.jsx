import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("Please enter a valid movie name.");
      return;
    } else setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      <button type="submit">Search Movie</button>
    </form>
  );
};

export default SearchForm;
