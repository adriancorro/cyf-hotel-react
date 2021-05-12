import React from "react";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCardsque />
      <Bookings />
    </div>
  );
};

const Heading = props => {
  return (
    <header className="App-header">
      CYF Hotel{" "}
      <img
        alt="pokemonImage"
        class="imgHeader"
        src="https://www.universalhotels.es/dms/multiHotel-UniversalHotels/logoUniversal.png"
      />
    </header>
  );
};

const TouristInfoCardsque = () => {
  return (
    <div className="cardParent">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/images/Top_Reasons_To_Visit/Riverside_Museum.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2F21%20Things%20VM.jpg&action=BlogDetailContent"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/london-areas/brixton/david_bowie_mural.jpg?h=360&la=en&w=640&hash=01935987BEC8D3686C1B7AB917CB17A29A82078E"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
