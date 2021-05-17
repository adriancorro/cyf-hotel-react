import React, { useState, useEffect } from "react";

const SearchResults = props => {
  const [selectorClass, setSelectorClass] = useState("white");

  /* Al renderizar props.results.map(e => Object.keys(e))[0] da undefined por lo que solo queremos
que entre a la condicion si es true de lo contrario (no se puede hacer map de undefined).

sin el useEffect no se puede hacer setSelectorClass porque es un loop con muchas iteracciones
useEffect resuelve el problema useEffect "llama a esto solo cuando esto cambie."
*/
  useEffect(() => {
    if (props.results.map(e => Object.keys(e))[0]) {
      if (props.results.map(e => Object.keys(e))[0].includes("vip")) {
        setSelectorClass("orange");
        console.log("------------------------------------");
      }
    }
  }, [props.results.map(e => Object.keys(e))[0]]);

  return (
    <div>
      {props.results != 0 ? (
        <table className="table">
          <thead>
            <tr className={selectorClass}>
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
