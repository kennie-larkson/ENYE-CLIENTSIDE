import React, { useState } from "react";

const SearchBar = ({ profiles }) => {
  const [inputValue, setInputValue] = useState("");

  //input change event handler
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  // console.log(inputValue.toLocaleLowerCase());
  // console.log(profiles.map(profile => Object.keys(profile)));
  const profile_keys = profiles.map((profile) => Object.values(profile));
  // const filteredData = profile_keys.filter(
  //   (profile_key) => profile_key.value === inputValue
  // );
  console.log(profile_keys);

  //button click event handler
  // let filteredData = [];
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   const lowerCasedFilter = inputValue.toLowerCase();
  //   filteredData = profiles.filter((profile) => {
  //     return Object.keys(profile).some((key) => {
  //       return profile[key].toLowerCase().includes(lowerCasedFilter);
  //     });
  //   });
  // };

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
        {/* </form> */}
        {/* {filteredData.map((profile) => (
          <div key={profile.CreditCardNumber}>
            <div>
              {profile.FirstName} {profile.LastName} - {profile.gender} -{" "}
              {profile.CreditCardType}
            </div>
          </div>
        ))} */}
      </nav>
    </main>
  );
};

export default SearchBar;
