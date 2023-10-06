import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import { useState } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const [string, setString] = useState("");

  const handleChange = (event) => {
    setString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(string));
  };

  return (
    <div>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
      <form>
        <input placeholder="Busqueda" value={string} onChange={handleChange} />
        <button onClick={handleSubmit}>Buscar</button>
      </form>
    </div>
  );
};

export default NavBar;
