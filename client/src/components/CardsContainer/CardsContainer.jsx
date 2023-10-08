/* eslint-disable react/prop-types */
// - Este componente toma un driver y por cada driver va a renderizar una card con la info de cada driver y un link para el detail del driver en cuestion
import style from "./Container.module.css";
import Card from "../Card/Card";
// import { useSelector } from "react-redux";
// import { useState } from "react";

const CardsContainer = ({ numeroDeDrivers }) => {
  // const Drivers = useSelector((state) => state.users);

  // eslint-disable-next-line no-unused-vars
  // const [nDrivers, setNDrivers] = useState(9); // hasta donde quiero mostrar
  // const [pagina, setPagina] = useState(1);

  // const driverFinal = pagina * nDrivers; // 1 * 9
  // const driverInicial = driverFinal - nDrivers; // 9 - 9

  // // en que pagina estoy
  // const numeroDeDrivers = Drivers.slice(driverInicial, driverFinal);
  // const paginasTotales = Math.ceil(Drivers.length / nDrivers); // array de drivers / 9

  return (
    <div className={style.container}>
      {numeroDeDrivers.map((driver) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Card
            key={driver.id}
            id={driver.id}
            image={driver.image}
            name={driver.name}
            lastName={driver.lastName}
            teams={driver.teams}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
