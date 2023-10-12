/* eslint-disable no-unused-vars */
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers, getTeams } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AllDrivers = useSelector((state) => state.users);
  const FiltersDriver = useSelector((state) => state.usersCopy);

  useEffect(() => {
    setPagina(1);
  }, [FiltersDriver]);

  const Drivers = FiltersDriver.length > 0 ? FiltersDriver : AllDrivers;

  const [nDrivers, setNDrivers] = useState(9);
  const [pagina, setPagina] = useState(1);

  const driverFinal = pagina * nDrivers;
  const driverInicial = driverFinal - nDrivers;

  // en que pagina estoy
  const numeroDeDrivers = Drivers.slice(driverInicial, driverFinal);
  const paginasTotales = Math.ceil(Drivers.length / nDrivers); // array de drivers / 9

  return (
    <div className={style.home}>
      <CardsContainer numeroDeDrivers={numeroDeDrivers} />
      <Paginado
        setPagina={setPagina}
        pagina={pagina}
        paginasTotales={paginasTotales}
      />
    </div>
  );
};

export default Home;
