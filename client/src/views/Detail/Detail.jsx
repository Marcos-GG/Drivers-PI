import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getById } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.userId);

  useEffect(() => {
    dispatch(getById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style["detail-container"]}>
      <h1>Detalle del Driver</h1>
      <div className={style["detail-content"]}>
        <div className={style["image-container"]}>
          <img
            src={driver?.image}
            alt="Driver"
            className={style["driver-image"]}
          />
        </div>
        <div className={style["info-container"]}>
          <p>ID: {driver?.id}</p>
          <p>Nombre: {driver?.name}</p>
          <p>Apellido: {driver?.lastName}</p>
          <p>Nacionalidad: {driver?.nationality}</p>
          <p>Fecha de Nacimiento: {driver?.birth}</p>
          <p>Equipos: {driver?.teams}</p>
          <p>Descripción: {driver?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
