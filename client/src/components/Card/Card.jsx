/* eslint-disable react/prop-types */

import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ id, name, lastName, image, teams }) => {
  return (
    <div>
      <div className={style.card}>
        <img src={image} className={style.img} alt="Profile" />
        <p>Name: {name}</p>
        <p>Last Name: {lastName}</p>
        <p>Teams: {teams}</p>

        <button>
          <NavLink to={`/detail/${id}`}>Detail</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Card;
