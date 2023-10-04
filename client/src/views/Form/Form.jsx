import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const formHandler = (event) => {
    //lo que escribi se guardar en el estado
    const property = event.target.name; // vinculamos el campo a traves de name
    const value = event.target.value; // tenemos su valor

    setForm({
      ...form,
      [property]: value,
    });
  };

  return (
    <form>
      <div>
        <label>Email: </label>
        <input
          type="text"
          value={form.email}
          onChange={formHandler}
          name="email"
        />
      </div>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={formHandler}
          name="name"
        />
      </div>

      <div>
        <label>Phone: </label>
        <input
          type="text"
          value={form.phone}
          onChange={formHandler}
          name="phone"
        />
      </div>
    </form>
  );
};

export default Form;

// mi form tiene que ser un reflejo de mi estado
// value= {form.x} el mismo valor que el estado
// onChange={} manda un evento
