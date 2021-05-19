import React from "react";

const Footer = () => {
  let list = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer>
      <ul>
        {list.map((value, index) => {
          return <li key={index}> {value} </li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
