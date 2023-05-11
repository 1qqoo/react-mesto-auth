import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = formValue;
    props.handleRegistration(email, password);
  }

  return (
    <div className="authorization">
      <h2 className="authorization__title">Регистрация</h2>
      <form
        className="authorization__form"
        onSubmit={handleSubmit}
      >
        <input
          name="email"
          className="authorization__input"
          placeholder="Email"
          value={formValue.email}
          onChange={handleChange}
        ></input>
        <input
          name="password"
          className="authorization__input"
          placeholder="Пароль"
          value={formValue.password}
          onChange={handleChange}
        ></input>
        <button
          to="/sign-in"
          type="submit"
          className="authorization__button"
        >
          Зарегистрироваться
        </button>
        <p className="authorization__paragraph">
          {" "}
          Уже зарегистрированы?
          <Link
            to="/sign-in"
            className="authorization__link"
          >
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
