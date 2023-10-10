/* eslint-disable no-unused-vars */
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";

const Home = () => {
  const dispatch = useDispatch();
  // home es quien muestra CardContianer , por eso necesitamos hacer el dispatch que getAllUsers cuando mostamos el componente home

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const AllDrivers = useSelector((state) => state.users);
  const FiltersDriver = useSelector((state) => state.usersCopy);

  const Drivers = FiltersDriver.length > 0 ? FiltersDriver : AllDrivers;

  const [nDrivers, setNDrivers] = useState(9); // hasta donde quiero mostrar
  const [pagina, setPagina] = useState(1);

  const driverFinal = pagina * nDrivers; // 1 * 9
  const driverInicial = driverFinal - nDrivers; // 9 - 9

  // en que pagina estoy
  const numeroDeDrivers = Drivers.slice(driverInicial, driverFinal);
  const paginasTotales = Math.ceil(Drivers.length / nDrivers); // array de drivers / 9

  return (
    <>
      <h1>Hola soy home</h1>
      <CardsContainer numeroDeDrivers={numeroDeDrivers} />
      <Paginado
        setPagina={setPagina}
        pagina={pagina}
        paginasTotales={paginasTotales}
      />
    </>
  );
};

export default Home;
