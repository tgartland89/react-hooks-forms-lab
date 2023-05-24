import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  function handleSearchChange(e) {
    // we could pass up the whole event object via onSearchChange
    // but passing *only* the value makes the data easier to work with in the parent
    onSearchChange(e.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;