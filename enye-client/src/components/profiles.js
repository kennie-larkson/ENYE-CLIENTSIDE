import React from "react";
import Profile from "./profile";

const Profiles = ({ profiles, loading }) => {
  if (loading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }
  return (
    <>
      <ul className="list-group mb4 ">
        {profiles.map((profile, index) => {
          return (
            <li className="list-group-item" key={index}>
              <Profile profile={profile} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Profiles;
