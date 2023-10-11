import { useState } from "react";
import validation from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { postDriver } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const Teams = useSelector((state) => state.teams);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    nationality: "",
    image: "",
    birth: "",
    description: "",
    teams: [],
  });

  const [error, setError] = useState({});

  const formHandler = (event) => {
    //lo que escribi se guardar en el estado
    const property = event.target.name; // vinculamos el campo a traves de name
    let value = event.target.value; // tenemos su valor

    if (property === "teams") {
      value = Array.from(
        event.target.selectedOptions,
        (option) => option.value
      );
    }

    setForm({
      ...form,
      [property]: value,
    });

    setError(
      validation({
        ...form,
        [property]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDriver(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={formHandler}
          name="name"
        />
        {error.name && <span>{error.name}</span>}
      </div>

      <div>
        <label>lastName: </label>
        <input
          type="text"
          value={form.lastName}
          onChange={formHandler}
          name="lastName"
        />
        {error.lastName && <span>{error.lastName}</span>}
      </div>

      <div>
        <label>Nationality: </label>
        <input
          type="text"
          onChange={formHandler}
          value={form.nationality}
          name="nationality"
        />
      </div>

      <div>
        <label>Image: </label>
        <input
          type="text"
          value={form.image}
          onChange={formHandler}
          name="image"
        />
      </div>

      <div>
        <label>Birth: </label>
        <input
          type="text"
          value={form.birth}
          onChange={formHandler}
          name="birth"
        />
      </div>

      <div>
        <label>Description: </label>
        <input
          type="text"
          value={form.description}
          onChange={formHandler}
          name="description"
        />
      </div>

      <div>
        <label>Teams: </label>
        <select value={form.teams} onChange={formHandler} name="teams">
          {Teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button type="submit"> Enviar </button>
      </div>
    </form>
  );
};

export default Form;

// mi form tiene que ser un reflejo de mi estado
// value= {form.x} el mismo valor que el estado
// onChange={} manda un evento
