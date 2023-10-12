/* eslint-disable react/prop-types */
// - Este componente toma un driver y por cada driver va a renderizar una card con la info de cada driver y un link para el detail del driver en cuestion
import style from "./Container.module.css";
import Card from "../Card/Card";

const CardsContainer = ({ numeroDeDrivers }) => {
  return (
    <div className={style.container}>
      {numeroDeDrivers.map((driver, index) => {
        return (
          // eslint-disable-next-line react/jsx-key

          <Card
            id={driver.id}
            key={index}
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
