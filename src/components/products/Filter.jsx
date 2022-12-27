import React from "react";
import { useFilterContext } from "../../contexts/filter_context";

function Filter(props) {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Search input */}
        <div className="form-group">
          <input
            type="text"
            name="text"
            placeholder="search"
            className="search-input"
            value={text}
            onChange={updateFilters}
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
