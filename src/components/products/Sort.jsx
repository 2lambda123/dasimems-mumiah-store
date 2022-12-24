import React from "react";
import { useFilterContext } from "../../contexts/filter_context";

function Sort(props) {
  const { filtered_products: products, sort, updateSort } = useFilterContext();
  return (
    <div>
      <p>{products.length} products found</p>
      <form>
        <label htmlFor="sort">Sort By</label>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </div>
  );
}

export default Sort;
