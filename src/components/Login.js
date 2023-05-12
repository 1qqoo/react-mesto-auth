import React from "react";

function Login() {
  return (
    <div className="authorization">
      <h2 className="authorization__title">Вход</h2>
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
