import React, { useState, useEffect } from "react";

const SearchResults = props => {
  const [selectorClass, setSelectorClass] = useState("white");
  const [ab, setA] = useState([]);

  const Order = ({ date, ind }) => {
    const Ordenar2 = () => {
      /*   setState actualiza el objeto de estado y vuelve a renderizar el componente automáticamente.
       */ setA(ind);
      date.sort((b, a) => (a[ind] > b[ind] ? 1 : a[ind] < b[ind] ? -1 : 0));

      if (ab == ind) {
        setA(false);
        date.sort((a, b) => (a[ind] > b[ind] ? 1 : a[ind] < b[ind] ? -1 : 0));
      }
    };

    return (
      <div>
        <div className="order2" onClick={Ordenar2}>
          {" "}
          A-Z{" "}
        </div>
      </div>
    );
  };

  /* Al renderizar props.results.map(e => Object.keys(e))[0] da undefined por lo que solo queremos
que entre a la condicion si es true de lo contrario (no se puede hacer map de undefined).

sin el useEffect no se puede hacer setSelectorClass porque es un loop con muchas iteracciones
useEffect resuelve el problema.  con el  [] useEffect solo se ejecutará cuando el componente
se monte, y no en cada rerenderizado
*/
  useEffect(() => {
    if (props.results.map(e => Object.keys(e))[0]) {
      if (props.results.map(e => Object.keys(e))[0].includes("vip")) {
        setSelectorClass("orange");
        console.log(
          "-------------This line of code runs only once.------------------"
        );
      }
    }
  }, []);

  return (
    <div>
      {props.results != 0 ? (
        <table className="table">
          <thead>
            <tr className={selectorClass}>
              {/* forma 1  */}
              {console.log(" props.results" + props.results)}
              {/* .map(e => Object.keys(e))[0] Primero o ultimo: [props.results.length -1]*/}
              {props.results
                .map(e => Object.keys(e))
                [props.results.length - 1].map((e, index) => {
                  return (
                    <th key={index} scope="col">
                      <Order date={props.results} ind={e} /> {e}
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
