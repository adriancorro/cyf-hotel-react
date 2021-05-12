import React from "react";
import fakeBookings from "./data/fakeBookings.json";

import moment from "moment";

const Search = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
      <SearchResults />
    </div>
  );
};

const SearchButton = () => {
  return <button className="btn btn-primary">Search</button>;
};
const SearchResults = () => {
  let dateCheckInDate;
  let dateCheckOutDate;
  //let reservationDate = [["reservation premium" , "adrian", "corro", "adriancorrog@gmail.com","303","12/02/2022","13/02/2022"]]
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">#Night</th>
        </tr>
      </thead>
      <tbody>
        {fakeBookings.map((value, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{value.title}</td>
              <td>{value.firstName}</td>
              <td>{value.surname}</td>
              <td>{value.email}</td>
              <td>{value.roomId}</td>
              <td>{value.checkInDate}</td>
              <td>{value.checkOutDate}</td>
              {/* Solucion a error:   https://stackoverflow.com/questions/45467940/calculate-and-display-difference-between-two-dates-using-moment-js-in-react-js */}
              <td>
                {" "}
                {moment(value.checkOutDate).diff(
                  value.checkInDate,
                  "days"
                )}{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Search;
