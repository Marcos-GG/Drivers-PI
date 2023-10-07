// - Este componente toma un driver y por cada driver va a renderizar una card con la info de cada driver y un link para el detail del driver en cuestion
import style from "./Container.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const Drivers = useSelector((state) => state.users);

  return (
    <div className={style.container}>
      {Drivers.map((driver) => {
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
