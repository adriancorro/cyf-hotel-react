import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
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
        {props.results.map((result, index) => {
          return <Child result2={result} key={index} />;
        })}
      </tbody>
    </table>
  );
};
/* 
          De igual forma serviria: 
          <Child result2={result} key={index} />
          const Child = (props)  =>
          para  hacer: 
          console.log(props.result2)
          Object.values(props.result2).map */

/* Nota: en const Child = ({result2})  => deberia ser:
          const Child = ({result})  => pero para entender mas detallado
          se coloca asi */
const Child = ({ result2 }) => {
  const [selector, setSelector] = useState("white");
  const selectionRow = () => {
    if (selector == "white") {
      setSelector("green");
    } else {
      setSelector("white");
    }
  };
  console.log(result2.id);
  return (
    <tr className={selector} onClick={selectionRow}>
      {Object.values(result2).map((data, index) => (
        <td key={index}>{data}</td>
      ))}
      <td>{moment(result2.checkOutDate).diff(result2.checkInDate, "days")}</td>
    </tr>
  );
};

{
  /* Forma 2 */
}
{
  /*         {fakeBookings.map((value, index) => {return (
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
            )})}  */
}
{
  /*      Solucion a error:   https://stackoverflow.com/questions/45467940/calculate-and-display-difference-between-two-dates-using-moment-js-in-react-js    */
}

export default SearchResults;
