import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cardParent">
      <div className="card">
        <img
          alt="glasgow"
          src="https://peoplemakeglasgow.com/images/Top_Reasons_To_Visit/Riverside_Museum.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            Glasgow | Attractions & Tourist Information{" "}
          </h5>
          <p className="card-text">
            Vibrant, edgy and brimming with personality, Scotland’s largest city
            is a must-see spot for art, culture and cuisine, while its proximity
            to Loch Lomond.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          alt="manchester2016"
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2F21%20Things%20VM.jpg&action=BlogDetailContent"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Visit Manchester </h5>
          <p className="card-text">
            The Official Tourist Board for Manchester & Greater Manchester with
            information about what to see and do, what's on and where to eat in
            the drink in the region.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          alt="london"
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/london-areas/brixton/david_bowie_mural.jpg?h=360&la=en&w=640&hash=01935987BEC8D3686C1B7AB917CB17A29A82078E"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Visit London </h5>
          <p className="card-text">
            Attracting 27 million visitors every year, London is the most
            visited city in Europe. Find things to do in London, from iconic
            sightseeing spots and fun-filled days out to top restaurants.
          </p>
          <a
            href="https://visitlondon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
