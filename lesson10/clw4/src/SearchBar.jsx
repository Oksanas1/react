import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onHandleChangeFilter
}) => {
  return (
    <form>
      <input 
        name="filterText"
        type="text" 
        value={filterText}
        placeholder="Search..." 
        onChange={onHandleChangeFilter} />
      <label>
        <input
          name="inStockOnly"
          type="checkbox" 
          checked={inStockOnly} 
          onChange={onHandleChangeFilter} />
        {' Only show products in stock'}
      </label>
    </form>
  );
};

export default SearchBar;