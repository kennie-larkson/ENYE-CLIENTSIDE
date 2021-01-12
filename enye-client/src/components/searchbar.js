import React, { useState } from "react";

const SearchBar = ({ profiles }) => {
  const [inputValue, setInputValue] = useState("");

  //input change event handler
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  
  const profile_keys = profiles.map((profile) => Object.values(profile));
  
  console.log(profile_keys);



  return (
    <main>
      <nav className="navbar navbar-light bg-light">
        {/* <form className="form-inline"> */}
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by name e.g Andrew young"
          aria-label="Search"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          // onClick={handleClick}
        >
          Search
        </button>
        
      </nav>
    </main>
  );
};

export default SearchBar;
