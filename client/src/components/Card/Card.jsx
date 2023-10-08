/* eslint-disable react/prop-types */
// este componente por cada driver que recibe crea una card
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ id, name, lastName, image, teams }) => {
  return (
    <div>
      <button>
        <NavLink to={`/detail/${id}`}>Detail</NavLink>
      </button>

      <div className={style.card}>
        <p>estan dentro de una card</p>
        <img src={image} className={style.img} />
        <p>Name:{name}</p>
        <p>lastName:{lastName}</p>
        <p>teams: {teams}</p>
      </div>
    </div>
  );
};

export default Card;
