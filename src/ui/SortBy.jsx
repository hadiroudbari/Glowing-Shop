import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options, sortValue, type = "white" }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get(sortValue) || "";

  function handleChange(e) {
    searchParams.set(sortValue, e.target.value);
    if (!e.target.value) searchParams.delete(sortValue);

    if (searchParams.get("page")) searchParams.set("page", 1);

    if (sortValue === "sortByTopCategory") {
      searchParams.get("sortByCategory") &&
        searchParams.delete("sortByCategory");
    }

    setSearchParams(searchParams);
  }

  return (
    <Select
      onChange={handleChange}
      value={sortBy}
      options={options}
      type={type}
    />
  );
}

export default SortBy;
