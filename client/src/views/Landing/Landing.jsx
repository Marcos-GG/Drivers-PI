// import style from "./landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    // <div className={style.landingPage}>
    <div>
      <button>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
};

export default Landing;
