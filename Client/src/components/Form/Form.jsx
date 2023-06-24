import React from "react";
import style from "./Form.module.css";
import validation from "./validation";
import Titulo from "../Titulo/Titulo";
import imagen from "../../img/Rick_and_Morty.svg.png";

export default function Form({ login }) {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setErrors(validation({ ...userData, [name]: value }));
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).length === 0) login(userData);
  };
  const handleInvited = () => {
    login({ email: "rblazquez111@gmail.com", password: "ricardo123" });
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <Titulo title={imagen} />
      </div>
      <form action="" className={style.text}>
        <label htmlFor="email" className={style.etiqueta}>
          Email:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={userData.email}
          placeholder="Enter your email..."
          onChange={handleChange}
        />
        <p className={style.danger}>{errors.email} </p>
        <label htmlFor="password" className={style.etiqueta}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password... "
          value={userData.password}
          onChange={handleChange}
        />
        <p className={style.danger}>{errors.password} </p>
        <div className={style.botones}>
          <button className={style.button} onClick={handleSubmit} type="submit">
            Submit
          </button>
          <button
            id="2"
            className={style.button}
            onClick={handleInvited}
            type="button"
          >
            Invited
          </button>
        </div>
      </form>
    </div>
  );
}
