const validation = (form) => {
  const error = {};

  if (!form.name) error.name = "el input esta vacio";

  if (!form.lastName) error.lastName = "el input esta vacio";

  return error;
};

export default validation;
