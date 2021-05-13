import React, { useState } from "react";
import Search from "./Search.js";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

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

const SearchResults = props => {
  //let reservationDate = [["reservation premium" , "adrian", "corro", "adriancorrog@gmail.com","303","12/02/2022","13/02/2022"]]
  return (
    <table className="table">
      <thead>
        <tr>
          {/* forma 1  */}
          {props.results
            .map(e => Object.keys(e))[0]
            .map((e, index) => {
              return (
                <th key={index} scope="col">
                  {e}
                </th>
              );
            })}
          <th scope="col">#Night</th>
          {/* forma 2  */}
          {/*   <th scope="col">#id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th> 
          <th scope="col">check out date</th>
          <th scope="col">#Night</th> */}
        </tr>
      </thead>
      <tbody>
        {/* Forma 1 */}
        {props.results.map((e, index) => (
          <tr key={index}>
            {Object.values(e).map((e, index) => {
              return <td key={index}>{e}</td>;
            })}
            <td>{moment(e.checkOutDate).diff(e.checkInDate, "days")}</td>
          </tr>
        ))}

        {/* Forma 2 */}
        {/*         {fakeBookings.map((value, index) => {return (
            <tr key={index}>
              <th key={index}>{index}</th>
              <td>{value.title}</td>
              <td>{value.firstName}</td>
              <td>{value.surname}</td>
              <td>{value.email}</td>
              <td>{value.roomId}</td>
              <td>{value.checkInDate}</td>
              <td>{value.checkOutDate}</td>
              <td>{moment(value.checkOutDate).diff(value.checkInDate,"days")}</td>       
            </tr>
          )})}  */}
        {/*      Solucion a error:   https://stackoverflow.com/questions/45467940/calculate-and-display-difference-between-two-dates-using-moment-js-in-react-js    */}
      </tbody>
    </table>
  );
};

export default Bookings;
