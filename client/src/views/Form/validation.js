const validation = (form) => {
  const error = {};

  if (!form.name) {
    error.name = "El campo está vacío";
  } else if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(form.name)) {
    error.name = "Solo se admiten letras";
  }

  if (!form.lastName) {
    error.lastName = "El campo está vacío";
  } else if (!/^[A-Za-z]+$/.test(form.lastName)) {
    error.lastName = "Solo se admiten letras";
  }

  if (!form.nationality) {
    error.nationality = "El campo está vacío";
  } else if (!/^[A-Za-z]+$/.test(form.nationality)) {
    error.nationality = "Solo se admiten letras";
  }

  if (!/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$/.test(form.image)) {
    error.image = "url o imagen no valido";
  }

  if (!form.birth) error.birth = "El campo está vacío";

  if (form.description.length < 20)
    error.description = " la descripcion tiene pocos caracteres";
  else if (form.description.length > 150)
    error.description = "Demasiado caracteres";

  return error;
};

export default validation;
