const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validation(inputs) {
  const errors = {};

  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!inputs.email) {
    errors.email = "El correo electrónico no puede estar vacio";
  }
  if (inputs.email.length > 35) {
    errors.email = "El correo electrónico no puede tener mas de 35 caracteres";
  }

  if (inputs.password.length === 0) {
    errors.password = "Ingrese contraseña";
  }

  if (!/\d/.test(inputs.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  }

  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password =
      "La contraseña tiene que tener una longitud entre 6 y 10 caracteres";
  }
  return errors;
}
