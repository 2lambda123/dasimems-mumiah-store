import React from "react";
import { useFilterContext } from "../../contexts/filter_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";

function Filter(props) {
  const {
    filters: {
      text,
      category,
      company,
      size,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const sizes = getUniqueValues(all_products, "sizes");

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Search input */}
        <div className="form-control">
          <input
            type="text"
            name="text"
            placeholder="search"
            className="search-input"
            value={text}
            onChange={updateFilters}
          />
        </div>
        {/* End Search input */}
        {/* Categories */}
        <div className="form-control">
          <h5>Categories</h5>
          <div>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === c?.toLowerCase() ? "active" : null
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        {/* End Categories */}
      </form>
    </div>
  );
}

export default Filter;
