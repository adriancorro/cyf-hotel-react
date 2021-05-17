import React, { useState, useEffect } from "react";

// Este componente no se esta utilizando, solo es como prueba

function SearchResultsFetcher() {
  const [BookingsFetcher, setBookingsFetcher] = useState([]);

  useEffect(() => {
    console.log("Fetching https://cyf-react.glitch.me");

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookingsFetcher(data);
        console.log(data);
      });
  }, []);

  if (BookingsFetcher != 0) {
    return BookingsFetcher;
  } else {
    return [];
  }
}

export default SearchResultsFetcher;
