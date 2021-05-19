import React from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import TouristInfoCardsque from "./TouristInfoCardsque";
import Heading from "./Heading";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCardsque />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
