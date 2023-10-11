import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getByName,
  orderNameAZ,
  orderNameZA,
  filterApi,
  filterDb,
  filterTeams,
} from "../../redux/actions";
import { useState } from "react";
import style from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const [string, setString] = useState("");
  const Teams = useSelector((state) => state.teams);

  const handleChange = (event) => {
    setString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(string));
  };

  const handlerOrderAz = (event) => {
    event.preventDefault();
    dispatch(orderNameAZ());
  };

  const handlerOrderZa = (event) => {
    event.preventDefault();
    dispatch(orderNameZA());
  };

  // falta por nacimiento

  //

  const handlerApi = (event) => {
    event.preventDefault();
    dispatch(filterApi());
  };

  const handlerDb = (event) => {
    event.preventDefault();
    dispatch(filterDb());
  };

  const handlerTeams = (event) => {
    const teamSeleccionado = event.target.value;
    dispatch(filterTeams(teamSeleccionado));
  };

  return (
    <div>
      <div>
        <Link to="/home">HOME</Link>
        <Link to="/create">FORM</Link>
        <input placeholder="Busqueda" value={string} onChange={handleChange} />
        <button onClick={handleSubmit}>Buscar</button>

        <form></form>
      </div>

      {/* falta filtrar por teams */}

      <div className={style.dropdown}>
        <button className={style.dropbtn}>Ordenar por Nombre</button>
        <div className={style.dropdownContent}>
          <ul>
            <li>
              <button onClick={handlerOrderAz}>Ascendente</button>
            </li>
            <li>
              <button onClick={handlerOrderZa}>Descendente</button>
            </li>
          </ul>
        </div>
      </div>

      {/*<div className={style.dropdown}>
        <button className={style.dropbtn}>Ordenar por nacimiento</button>
        <div className={style.dropdownContent}>
          <ul>
            <li>
              <button onClick={}>Ascendente</button>
            </li>
            {/* <li>
              <button onClick={}>Descendente</button>
            </li>
          </ul>
        </div>
      </div>*/}

      <div className={style.dropdown}>
        <button className={style.dropbtn}>Origen</button>
        <div className={style.dropdownContent}>
          <ul>
            <li>
              <button onClick={handlerApi}>Api</button>
            </li>
            <li>
              <button onClick={handlerDb}>Base de datos</button>
            </li>
          </ul>
        </div>
      </div>

      <label htmlFor="">Teams</label>
      <select onChange={handlerTeams}>
        <option value="select">Seleciona un team</option>
        {Teams.map((team, index) => (
          <option key={index} value={team.id}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NavBar;
