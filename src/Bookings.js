import React, { useState } from "react";
import SearchResults from "./SearchResults.js";
import Search from "./Search.js";
import SearchResultsFetcher from "./SearchResultsFetcher.js";

const Bookings = () => {
  const [searchInput, setSearchInput] = useState(false);

  const Search2 = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(
      searchVal.charAt(0).toUpperCase() + searchVal.slice(1).toLowerCase()
    );
    setSearchInput(
      searchVal.charAt(0).toUpperCase() + searchVal.slice(1).toLowerCase()
    );
  };

  console.log(searchInput);

  return (
    <div className="App-content">
      <div className="container">
        <Search searchKey={Search2} />

        {!searchInput ? (
          <SearchResults results={SearchResultsFetcher()} />
        ) : (
          <SearchResults
            results={SearchResultsFetcher().filter(
              e =>
                e.title === searchInput ||
                e.firstName === searchInput ||
                e.surname === searchInput ||
                e.id == searchInput
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Bookings;
