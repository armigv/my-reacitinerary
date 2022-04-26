import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../../StateProvider";
import avatar from "../../img/persons/avatar1.png";
import dots from "../../img/icons/dots.png";

const Comments = (props) => {
  var date = useState();
  const [comments, setComments] = useState();
  const [{ user }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false);
  const [cambio, setCambio] = useState();
  const submitComment = async (event) => {
    event.preventDefault();

    function fecha() {
      var registro = new Date();
      var dia = registro.getDate();
      var mes = registro.getMonth() + 1;
      var year = registro.getFullYear();
      date = mes + "." + dia + "." + year;
    }

    fecha();
    const dataComments = {
      title: props.itinerario,
      message: event.target[0].value,
      user: user.datosUser.id,
      date: date,
      imagenUser: user.datosUser.imagenUser,
    };

    await axios
      .post("https://mytinerary-ana.herokuapp.com/api/comentarios", {
        dataComments,
      })
      .then((response) => setComments(response.data.response.comentario));
    setReload(!reload);
  };

  useEffect(() => {
    let id = props.itinerario;
    axios
      .get(`https://mytinerary-ana.herokuapp.com/api/comentarios/${id}`)
      .then((response) => setComments(response.data.response.comentario));
  }, [reload]);

  const borrarComentario = async (id) => {
    console.log("borrarid", id);
    await axios.delete(
      `https://mytinerary-ana.herokuapp.com/api/comentarios/${id}`
    );
    setReload(!reload);
  };

  const handleChange = (event) => {
    setCambio(event.currentTarget.textContent);
  };

  const modificar = async (id) => {
    console.log("id", id);
    console.log("cambio", cambio);
    let data = cambio;
    await axios
      .put(`https://mytinerary-ana.herokuapp.com/api/comentarios/${id}`, {
        data,
      })
      .then((response) => console.log("resmodificar", response));
    setReload(!reload);
  };

  console.log(comments);
  console.log(user.datosUser);
  return (
    <div>
      {comments?.map((item) =>
        user?.datosUser.id === item.user._id ? (
          <div className="usuariocity mt-4">
            <div className="icousuario">
              <img
                src={item.user.imagenUser}
                className="icousuario d-block w-100"
                alt="..."
              />
            </div>
            <div className="txtusuario2">
              <div>
                <h6>
                  <strong>
                    {item.user.firstname} {item.user.lastname}{" "}
                  </strong>
                  | {item.date}
                </h6>
              </div>
              <div className="txt1">
                <div
                  className="cinput"
                  contentEditable={true}
                  onKeyUp={handleChange}
                >
                  {item.mensaje}
                </div>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-transparency"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={dots} width="25" alt="logo" />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <button
                    onClick={() => modificar(item._id)}
                    type="button"
                    className="btn"
                    aria-label="modif"
                  >
                    Modify
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => borrarComentario(item._id)}
                    type="button"
                    className="btn"
                    aria-label="eli"
                  >
                    Eliminate
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="usuariocity mt-4">
            <div className="icousuario">
              <img
                src={item.user.imagenUser}
                className="icousuario d-block w-100"
                alt="..."
              />
            </div>
            <div className="txtusuario2">
              <div>
                <h6>
                  <strong>
                    {item.user.firstname} {item.user.lastname}{" "}
                  </strong>
                  | {item.date}
                </h6>
              </div>
              <div className="txt1">
                <p className="cinput">{item.mensaje}</p>
              </div>
            </div>
          </div>
        )
      )}

      {user ? (
        <div className="ciudadcomentario">
          <form onSubmit={submitComment}>
            <textarea
              type="submit"
              name="textarea"
              className="form-control form-input col-sm-6 col-md-10 mt-3 bradio"
              placeholder="Leave your comment..."
            >
              {" "}
            </textarea>
            <button type="submit" className="btn btn-warning mt-2 bradio2">
              Submit
            </button>
          </form>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Comments;
