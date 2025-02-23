import React, { useState } from "react";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = e => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.vale);
    console.log("Sending data to server");
    props.searchKey(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
                /*   Tambien podemos usar: 
                onChange={e => setSearchInput(e.target.value)
                  y no necesitamos handleSearchInput */
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const SearchButton = () => {
  return <button className="btn btn-primary">Search</button>;
};

export default Search;
