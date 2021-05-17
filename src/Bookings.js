import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults.js";
import Search from "./Search.js";
import SearchResultsFetcher from "./SearchResultsFetcher.js";
import moment from "moment";
import fakeBookings from "./data/fakeBookings.json";

/* https://ichi.pro/es/como-realizar-una-copia-profunda-de-objetos-y-matrices-en-javascript-136962536747145
 */
/* https://lodash.com/
 */ const Bookings = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [BookingsFetcher, setBookingsFetcher] = useState([]);
  const [Link, setLink] = useState([]);
  const Search2 = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(
      searchVal.charAt(0).toUpperCase() + searchVal.slice(1).toLowerCase()
    );
    setSearchInput(
      searchVal.charAt(0).toUpperCase() + searchVal.slice(1).toLowerCase()
    );
  };
  const urlFuntion1 = () => {
    return `https://cyf-react.glitch.me`;
  };

  const urlFuntion = id => {
    return `https://cyf-react.glitch.me/customers/${id}`;
  };
  // Si no se usa useEffect en el filter no aparecera los #night

  useEffect(() => {
    console.log("Fetching https://cyf-react.glitch.me");
    fetch(urlFuntion1())
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data);
        setBookingsFetcher(data);
      });
    console.log(fakeBookings);
  }, []);

  const [selectorProfile, setSelectorProfile] = useState(false);

  const CustomerProfile = props => {
    const ShowProfile = () => {
      console.log("fetch 2");
      setSelectorProfile(props.id);
      fetch(urlFuntion(props.id))
        .then(res => res.json())
        .then(data => {
          console.log(data);
          console.log(data);
          setLink(data);
        });
    };
    return (
      <button className="btn btn-outline-info" onClick={ShowProfile}>
        click here{" "}
      </button>
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search searchKey={Search2} />
        {!searchInput ? (
          <>
            {BookingsFetcher.forEach(
              a =>
                (a.night = moment(a.checkOutDate).diff(a.checkInDate, "days"))
            )}
            {BookingsFetcher.forEach(
              a => (a.info = <CustomerProfile id={a.id} />)
            )}
            <SearchResults results={BookingsFetcher} />
          </>
        ) : (
          <SearchResults
            results={BookingsFetcher.filter(
              e =>
                e.firstName === searchInput ||
                e.surname === searchInput ||
                e.title === searchInput
            )}
          />
        )}
        {[Link].forEach(a => {
          if (a.id === 1) {
            a.vip = "true";
          }
        })}
        {[Link].forEach(a => {
          if (a.id === 2) {
            a.vip = "false";
          }
        })}
        {[Link].forEach(a => {
          if (a.id === 3) {
            a.vip = "false";
          }
        })}
        {[Link].forEach(a => {
          if (a.id === 4) {
            a.vip = "false";
          }
        })}
        {[Link].forEach(a => {
          if (a.id === 5) {
            a.vip = "false";
          }
        })}
        {selectorProfile && <SearchResults results={[Link]} className="red" />}
      </div>
    </div>
  );
};

export default Bookings;
