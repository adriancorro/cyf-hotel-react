import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

const RestaurantButton = props => {
  return (
    <button
      className="btn btn-primary btn-restaurant"
      onClick={props.handleClick}
    >
      Add
    </button>
  );
};

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li className="list-restaurente">
      {" "}
      {props.orderType} {orders} <RestaurantButton handleClick={orderOne} />{" "}
    </li>
  );
};

export default Restaurant;
