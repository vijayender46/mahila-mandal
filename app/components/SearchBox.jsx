import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <div className="mm-headerInput">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;