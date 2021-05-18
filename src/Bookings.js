import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults.js";
import Search from "./Search.js";
import moment from "moment";
import Form from "./Form.js";

const Bookings = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [BookingsFetcher, setBookingsFetcher] = useState([]);
  const [BookingsFetcher2, setBookingsFetcher2] = useState([]);
  const [Link, setLink] = useState([]);
  const [selectorProfile, setSelectorProfile] = useState(false);

  const GetPropsFormData = valores => {
    console.info([valores]);
    setBookingsFetcher(
      [
        { id: BookingsFetcher.length + 1, title: valores[0], name: valores[1] }
      ].concat(BookingsFetcher)
    );

    console.info(BookingsFetcher);
  };

  const Search2 = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(
      searchVal.charAt(0).toUpperCase() + searchVal.slice(1).toLowerCase()
    );
    setSearchInput(
      searchVal.charAt(0).toUpperCase() + searchVal.slice(1).toLowerCase()
    );
  };
  const urlFuntion1 = () => {
    return `https://cyf-react.glitch.me`;
  };

  const urlFuntion = id => {
    if (BookingsFetcher.length - 1 < selectorProfile) {
      console.log(BookingsFetcher2);
    }
    return `https://cyf-react.glitch.me/customers/${id}`;
  };
  // Si no se usa useEffect en el filter no aparecera los #night
  /*   selectorProfile <= BookingsFetcher.length
   */ useEffect(() => {
    console.log("Fetching https://cyf-react.glitch.me");
    fetch(!selectorProfile ? urlFuntion1() : urlFuntion(selectorProfile))
      .then(res => {
        if (!res) {
          throw new Error(`HTTP error ! status : ${res.ok}`);
        } else {
          return res.json();
        }
      })
      .then(data => {
        !selectorProfile ? setBookingsFetcher(data) : setBookingsFetcher2(data);
      })
      .catch(e => console.log(e));
    /*    con [] el efecto solo se ejecutará cuando el componente se monte, y no en cada rerenderizado
      con  [selectorProfile] Solo se vuelve a ejecutar si selectorProfile cambia 
      si no se coloca nada: se ejecuta después del primer renderizado y después de cada actualización
      */
  }, [selectorProfile]);

  const CustomerProfile = props => {
    const ShowProfile = () => {
      console.log(props.id);
      setSelectorProfile(props.id);
      /*       setBookingsFetcher2([{id: BookingsFetcher.length+1, title: props.id}].concat(BookingsFetcher2))
       */
      console.log(selectorProfile);
    };

    return (
      <button className="btn btn-outline-info" onClick={ShowProfile}>
        Show profile
      </button>
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search searchKey={Search2} />

        {/*    1)  Renderizando componenente a la primera carga y solo si searchInput esta en su estado como false
             por lo que al hacer !searchInput da true  y agregando algunas propiedades a cada elemento especificado
             renderizar a la primera carga */}
        {!searchInput && (
          <>
            {BookingsFetcher.forEach(
              a =>
                (a.night = moment(a.checkOutDate).diff(a.checkInDate, "days"))
            )}
            {BookingsFetcher.forEach(
              /*   enviame como parametro al props id lo que tenga a.id del forEach */
              a => (a.info = <CustomerProfile id={a.id} />)
            )}
            <SearchResults results={BookingsFetcher} />
          </>
        )}

        {/* 2 Agregando algunas propiedades a elementos especificos y renderizar al cargar por primera vez */}
        {[BookingsFetcher2].forEach(a => {
          a.vip = "false";
        })}

        {[BookingsFetcher2].forEach(a => {
          if (a.id === 2) {
            a.vip = "true";
          }
        })}
        {[BookingsFetcher2].forEach(a => {
          if (a.id === 3) {
            a.vip = "false";
          }
        })}
        {[BookingsFetcher2].forEach(a => {
          if (a.id === 4) {
            a.vip = "false";
          }
        })}
        {[BookingsFetcher2].forEach(a => {
          if (a.id === 5) {
            a.vip = "true";
          }
        })}
        {/*3) configuracion del filtro y renderizar solo cuando searchInput sea true (por defecto es false)*/}
        {searchInput && (
          <SearchResults
            results={BookingsFetcher.filter(
              e =>
                e.firstName === searchInput ||
                e.surname === searchInput ||
                e.title === searchInput
            )}
          />
        )}

        {/* 4 Renderizar componente solo cuando selectorProfile sea true  */}
        {selectorProfile && <SearchResults results={[BookingsFetcher2]} />}
      </div>
      <Form sendFuntion={GetPropsFormData} />
    </div>
  );
};

export default Bookings;
