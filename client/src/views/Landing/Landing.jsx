import style from "./landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    // <div className={style.landingPage}>
    <div className={style.landingPage}>
      <div>
        <button className={style.buttonContainer}>
          <Link to="/home">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Landing;
