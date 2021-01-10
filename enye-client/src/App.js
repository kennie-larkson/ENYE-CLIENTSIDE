import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Profiles from "./components/profiles";
import Paginate from "./components/pagination";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(6);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://api.enye.tech/v1/challenge/records"
      );

      const {
        data: {
          records: { profiles },
        },
      } = response;
      setProfiles(profiles);
      console.log(profiles);
      setLoading(false);
    } catch (error) {
      console.log(`Oops!: ${error}`);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  //get current profiles
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="container mt-4">
      <h1 className="text-primary mb-3">Enye - List of Customer Details</h1>

      <Profiles profiles={currentProfiles} loading={loading} />
      <Paginate
        profilesPerPage={profilesPerPage}
        totalProfiles={profiles.length}
        paginate={paginate}
      />
    </main>
  );
}

export default App;
