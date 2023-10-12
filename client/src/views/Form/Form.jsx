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
    const property = event.target.name;
    let value = event.target.value;

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

  const camposLLenos = () => {
    // eslint-disable-next-line no-unused-vars
    const { image, ...otrosCampos } = form;
    return Object.values(otrosCampos).every((value) => value !== "");
  };

  const addTeam = (event) => {
    setForm({
      ...form,
      teams: [...form.teams, event.target.value],
    });
  };

  const removeTeam = (teamToRemove) => {
    setForm({
      ...form,
      teams: form.teams.filter((team) => team !== teamToRemove),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(error).length === 0 && camposLLenos()) {
      dispatch(postDriver(form));
    }
  };

  console.log(form);

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
        <label>Last Name: </label>
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
          type="date"
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
        <select onChange={addTeam} name="teams">
          {Teams.map((team, index) => (
            <option key={index} value={team}>
              {team}
            </option>
          ))}
        </select>
        {form.teams.map((team, index) => (
          <div key={index}>
            {team}
            <button type="button" onClick={() => removeTeam(team)}>
              x
            </button>
          </div>
        ))}
      </div>

      <div>
        <button
          type="submit"
          disabled={!camposLLenos() || Object.keys(error).length > 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
