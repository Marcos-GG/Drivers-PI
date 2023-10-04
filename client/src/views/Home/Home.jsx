import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  // homo es quien muestra CardContianer , por eso necesitamos hacer el dispatch que getAllUsers cuando mostamos el componente home
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Hola soy home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
