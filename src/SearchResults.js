import React, { useState } from "react";

const SearchResults = props => {
  return (
    <div>
      {props.results != 0 ? (
        <table className="table">
          <thead>
            <tr>
              {/* forma 1  */}
              {console.log(" props.results" + props.results)}
              {props.results
                .map(e => Object.keys(e))[0]
                .map((e, index) => {
                  return (
                    <th key={index} scope="col">
                      {e}
                    </th>
                  );
                })}
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
      ) : (
        <span>Loading...</span>
      )}
    </div>
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
    if (selector === "white") {
      setSelector("green");
    } else {
      setSelector("white");
    }
  };
  console.log(result2);
  return (
    <tr className={selector} onClick={selectionRow}>
      {result2 != 0 ? (
        Object.values(result2).map((data, index) => <td key={index}>{data}</td>)
      ) : (
        <span>Loading...888888888888888888</span>
      )}
    </tr>
  );
  {
    /*       Solucion a error:   https://stackoverflow.com/questions/45467940/calculate-and-display-difference-between-two-dates-using-moment-js-in-react-js */
  }
};

export default SearchResults;
