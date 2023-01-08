import React from "react";
import { useFilterContext } from "../../contexts/filter_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";
import {AiFillCloseCircle} from "react-icons/ai"

function Filter(props) {
  const {
    filters: {
      text,
      category,
      brand,
      size,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
    filterOptions
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const brands = getUniqueValues(all_products, "brand");
  const sizes = getUniqueValues(all_products, "sizes");

  return (

    <>
      <button className="close-filter-btn" onClick={filterOptions}>
        <AiFillCloseCircle />
      </button>

      <div className="container filter-container">


        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search input */}
          <div className="form-control filter-container-form">
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
          <div className="form-control filter-container-form">
            <h5>Categories</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`select-btn ${
                      category.toLowerCase() === c?.toLowerCase() ? "active-btn" : ""
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End Categories */}
          {/* Brand */}
          <div className="form-control filter-container-form">
            <h5>Brands</h5>
            <select className="brand-select" onChange={updateFilters} name="brand" value={brand}>
              {brands.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* End of brand */}
          {/* Sizes */}
          <div className="form-control filter-container-form">
            <h5>Sizes</h5>
            <ul className="container">
              {sizes.map((s, index) => (
                <li key={index} className="filter-sizes-container">
                  <label>
                    <input
                      name="sizes"
                      className="filter-sizes"
                      onChange={updateFilters}
                      type="checkbox"
                      value={s}
                    />
                    {s}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* End of sizes */}
          {/* Price */}
          <div className="form-control filter-container-form">
            <h5>Price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              className="filter-price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* End Price */}
          {/* Shipping */}
          <div className="form-control filter-container-form flex-container align-center">
            <label htmlFor="shipping">Free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              className="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* End of shipping */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    
    </>
  );
}

export default Filter;
