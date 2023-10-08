import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Landing from "./views/Landing/Landing";
import Form from "./views/Form/Form";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;

/* excat para que no se me muestre el contenido de un componente x en otro */
