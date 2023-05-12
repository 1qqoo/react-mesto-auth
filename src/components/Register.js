import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="authorization">
      <h2 className="authorization__title">Регистрация</h2>
      <form className="authorization__form">
        <input
          name="email"
          className="authorization__input"
          placeholder="Email"
        ></input>
        <input
          name="password"
          className="authorization__input"
          placeholder="Пароль"
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
