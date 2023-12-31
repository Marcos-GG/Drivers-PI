import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getByName,
  orderNameAZ,
  orderNameZA,
  filterApi,
  filterDb,
  filterTeams,
  resetFilters,
  edadA,
  edadD,
} from "../../redux/actions";
import { useState } from "react";
import style from "./NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const [string, setString] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [orders, setOrders] = useState(null);

  const handlerReset = () => {
    dispatch(resetFilters(setFilters(""), setOrders(null)));
  };

  const Teams = useSelector((state) => state.teams);

  const handleChange = (event) => {
    setString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(string));
    setFilters("");
  };

  const handlerOrderAz = (event) => {
    event.preventDefault();
    dispatch(orderNameAZ());
    setOrders("az");
  };

  const handlerOrderZa = (event) => {
    event.preventDefault();
    dispatch(orderNameZA());
    setOrders("za");
  };

  const handlerApi = (event) => {
    event.preventDefault();
    dispatch(filterApi());
    setFilters("api");
  };

  const handlerDb = (event) => {
    event.preventDefault();
    dispatch(filterDb());
    setFilters("db");
  };

  const handlerOrderEdadA = (event) => {
    event.preventDefault();
    dispatch(edadA());
    setFilters("edadA");
  };

  const handlerOrderEdadD = (event) => {
    event.preventDefault();
    dispatch(edadD());
    setFilters("edadD");
  };

  const handlerTeams = (event) => {
    const teamSeleccionado = event.target.value;
    dispatch(filterTeams(teamSeleccionado));
    setFilters("teams");
  };

  return (
    <div className={style.navbar}>
      <Link to="/home" className={style.navLink}>
        HOME
      </Link>
      <Link to="/create" className={style.navLink}>
        FORM
      </Link>
      <button onClick={handlerReset} className={style.navButton}>
        Reiniciar Filtros
      </button>

      <input
        placeholder="Busqueda"
        value={string}
        onChange={handleChange}
        className={style.navInput}
      />
      <button onClick={handleSubmit} className={style.navButton}>
        Buscar
      </button>

      <form></form>

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

      <div className={style.dropdown}>
        <button className={style.dropbtn}>Ordenar por Edad</button>
        <div className={style.dropdownContent}>
          <ul>
            <li>
              <button onClick={handlerOrderEdadA}>Ascendente</button>
            </li>
            <li>
              <button onClick={handlerOrderEdadD}>Descendente</button>
            </li>
          </ul>
        </div>
      </div>

      <label htmlFor="" className={style.navLabel}>
        Teams
      </label>
      <select onChange={handlerTeams} className={style.navSelect}>
        <option value="select">Selecciona un team</option>
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
