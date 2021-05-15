import React from "react";
import SearchResults from "./SearchResults.js";
import Search from "./Search.js";
import SearchResultsFetcher from "./SearchResultsFetcher.js";

const Bookings = () => {
  const search2 = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search searchKey={search2} />
        <SearchResults results={SearchResultsFetcher()} />
        <SearchResults
          results={SearchResultsFetcher().filter(e => e.title === "Doctor")}
        />
      </div>
    </div>
  );
};

export default Bookings;
