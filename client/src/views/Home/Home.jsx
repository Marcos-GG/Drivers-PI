/* eslint-disable no-unused-vars */
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers, getTeams } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  // home es quien muestra CardContianer , por eso necesitamos hacer el dispatch que getAllUsers cuando mostamos el componente home

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

  const [nDrivers, setNDrivers] = useState(9); // hasta donde quiero mostrar
  const [pagina, setPagina] = useState(1);

  const driverFinal = pagina * nDrivers; // 1 * 9
  const driverInicial = driverFinal - nDrivers; // 9 - 9

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
