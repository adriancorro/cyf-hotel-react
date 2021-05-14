import React, { useState } from "react";
import SearchResults from "./SearchResults.js";
import Search from "./Search.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    searchVal.preventDefault();
    setBookings(FakeBookings);
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
