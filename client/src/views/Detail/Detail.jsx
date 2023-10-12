import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getById } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.userId);
  console.log(driver, "detail");

  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
      <h1>detalle del driver</h1>
      <img src={driver?.image} />
      <p>id: {driver?.id}</p>
      <p>Name: {driver?.name}</p>
      <p>LastName: {driver?.lastName}</p>
      <p>Nationality: {driver?.nationality}</p>
      <p>Birth: {driver?.birth}</p>
      <p>Teams: {driver?.teams}</p>
      <p>Description: {driver?.description}</p>
    </div>
  );
};

export default Detail;
