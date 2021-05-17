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
  const [BookingsFetcher2, setBookingsFetcher2] = useState([]);
  const [Link, setLink] = useState([]);
  const [selectorProfile, setSelectorProfile] = useState(false);
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
    fetch(!selectorProfile ? urlFuntion1() : urlFuntion(selectorProfile))
      .then(res => {
        if (!res) {
          throw new Error(`HTTP error ! status : ${res.ok}`);
        } else {
          return res.json();
        }
      })
      .then(data => {
        console.log(data);
        console.log(data.length);
        !selectorProfile ? setBookingsFetcher(data) : setBookingsFetcher2(data);
      })
      .catch(e => console.log(e));
  }, [selectorProfile]);

  const CustomerProfile = props => {
    const ShowProfile = () => {
      console.log(props.id);
      setSelectorProfile(props.id);
    };

    return (
      <button className="btn btn-outline-info" onClick={ShowProfile}>
        Show profile
      </button>
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search searchKey={Search2} />
        {BookingsFetcher.length ? (
          !searchInput ? (
            <>
              {BookingsFetcher.forEach(
                a =>
                  (a.night = moment(a.checkOutDate).diff(a.checkInDate, "days"))
              )}
              {BookingsFetcher.forEach(
                /*   enviame como parametro al props id lo que tenga a.id del forEach */
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
          )
        ) : (
          <SearchResults results={[BookingsFetcher]} />
        )}

        {[BookingsFetcher2].forEach(a => {
          a.vip = "false";
        })}

        {[BookingsFetcher2].forEach(a => {
          if (a.id === 2) {
            a.vip = "true";
          }
        })}
        {[BookingsFetcher2].forEach(a => {
          if (a.id === 3) {
            a.vip = "false";
          }
        })}
        {[BookingsFetcher2].forEach(a => {
          if (a.id === 4) {
            a.vip = "false";
          }
        })}
        {[BookingsFetcher2].forEach(a => {
          if (a.id === 5) {
            a.vip = "true";
          }
        })}

        {selectorProfile && <SearchResults results={[BookingsFetcher2]} />}
      </div>
    </div>
  );
};

export default Bookings;
