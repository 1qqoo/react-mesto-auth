import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

function Header({ text, link, loggedIn, setLoggedIn, email }) {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("jwt");
    navigate("./sign-in", { replace: true });
    setLoggedIn(false);
  }

  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип"
      />
      <div>
        <p className="header__email">{email}</p>
        <Link
          to={link}
          onClick={loggedIn ? signOut : ""}
          className={`${loggedIn ? "header__text_type_log" : "header__text"}`}
        >
          {text}
        </Link>
      </div>
    </header>
  );
}

export default Header;
