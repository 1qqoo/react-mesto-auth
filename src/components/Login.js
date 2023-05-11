import React from "react";

function Login(props) {
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
    props.handleLogin(email, password);
  }

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form
        className="login__form"
        onSubmit={handleSubmit}
      >
        <input
          name="email"
          className="login__input"
          placeholder="Email"
          value={formValue.email}
          onChange={handleChange}
        ></input>
        <input
          name="password"
          className="login__input"
          placeholder="Пароль"
          value={formValue.password}
          onChange={handleChange}
        ></input>
        <button
          to="/sign-in"
          type="submit"
          className="login__button"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
