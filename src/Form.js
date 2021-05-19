import React, { Fragment, useState } from "react";

const Form = props => {
  const [datos, setDatos] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    night: ""
  });

  const handleInputChange = event => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const enviarDatos = event => {
    event.preventDefault();
    props.sendFuntion([
      datos.title,
      datos.firstName,
      datos.surname,
      datos.email,
      datos.roomId,
      datos.checkInDate,
      datos.checkOutDate,
      datos.night
    ]);
    console.log(
      "enviando datos..." +
        [
          datos.title,
          datos.firstName,
          datos.surname,
          datos.email,
          datos.roomId,
          datos.checkInDate,
          datos.checkOutDate,
          datos.night
        ]
    );
  };

  return (
    <Fragment>
      <div class="container">
        <form className="row" onSubmit={enviarDatos}>
          <div class="row">
            <div className="col-sm">
              <input
                type="text"
                placeholder="title"
                className="form-control"
                onChange={handleInputChange}
                name="title"
                required
              />
            </div>
            <div className="col-sm">
              <input
                type="text"
                placeholder="first Name"
                className="form-control"
                onChange={handleInputChange}
                name="firstName"
                required
              />
            </div>
            <div className="col-sm">
              <input
                type="text"
                placeholder="surname"
                className="form-control"
                onChange={handleInputChange}
                name="surname"
                required
              />
            </div>
            <div className="col-sm">
              <input
                type="email"
                placeholder="email"
                className="form-control"
                onChange={handleInputChange}
                name="email"
                required
              />
            </div>
          </div>
          <div class="row">
            <div className="col-sm">
              <input
                type="number"
                placeholder="room Id"
                className="form-control"
                onChange={handleInputChange}
                name="roomId"
                required
              />
            </div>
            <div className="col-sm">
              <input
                type="date"
                placeholder="checkInDate"
                className="form-control"
                onChange={handleInputChange}
                name="checkInDate"
                required
              />
            </div>
            <div className="col-sm">
              <input
                type="date"
                placeholder="checkOutDate"
                className="form-control"
                onChange={handleInputChange}
                name="checkOutDate"
                required
              />
            </div>
            <div className="col-sm ">
              <input
                type="text"
                placeholder="night"
                className="form-control"
                onChange={handleInputChange}
                name="night"
                disabled
              />
            </div>
          </div>
          <div class="row  col-sm-3 container mt-2 mb-2">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
