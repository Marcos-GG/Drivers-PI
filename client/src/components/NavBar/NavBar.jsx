import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>
    </div>
  );
};

export default NavBar;
