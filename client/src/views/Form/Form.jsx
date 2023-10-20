import { useState } from "react";
import style from "./Form.module.css";
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
    if (form.teams.includes(event.target.value)) {
      return;
    }

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

    try {
      dispatch(postDriver(form));
      if (!error) alert("driver creado!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={style.formField}>
          <label className={style.label}>Name:</label>
          <input
            type="text"
            value={form.name}
            onChange={formHandler}
            name="name"
            className={style.input}
          />
          {error.name && (
            <span className={style["error-message"]}>{error.name}</span>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label}>Last Name:</label>
          <input
            type="text"
            value={form.lastName}
            onChange={formHandler}
            name="lastName"
            className={style.input}
          />
          {error.lastName && (
            <span className={style["error-message"]}>{error.lastName}</span>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label}>Nationality:</label>
          <input
            type="text"
            onChange={formHandler}
            value={form.nationality}
            name="nationality"
            className={style.input}
          />
          {error.nationality && (
            <span className={style["error-message"]}>{error.nationality}</span>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label}>Image:</label>
          <input
            type="text"
            value={form.image}
            onChange={formHandler}
            name="image"
            className={style.input}
          />
          {error.image && (
            <span className={style["error-message"]}>{error.image}</span>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label}>Birth:</label>
          <input
            type="date"
            value={form.birth}
            onChange={formHandler}
            name="birth"
            className={style.input}
          />
          {error.birth && (
            <span className={style["error-message"]}>{error.birth}</span>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label}>Description:</label>
          <input
            type="text"
            value={form.description}
            onChange={formHandler}
            name="description"
            className={style.input}
          />
          {error.description && (
            <span className={style["error-message"]}>{error.description}</span>
          )}
        </div>

        <div className={style.formField}>
          <label className={style.label}>Teams:</label>
          <select onChange={addTeam} name="teams" className={style.select}>
            {Teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
          {form.teams.map((team, index) => (
            <div key={index} className={style.selectedTeam}>
              {team}
              <button
                type="button"
                onClick={() => removeTeam(team)}
                className={style.removeButton}
              >
                x
              </button>
            </div>
          ))}
        </div>

        <div className={style.formField}>
          <button
            type="submit"
            disabled={!camposLLenos() || Object.keys(error).length > 0}
            className={style.submitButton}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
