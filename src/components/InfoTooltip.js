import InfotoltipSuccess from "../images/Union.svg";
import InfotoltipFailure from "../images/Union-krestik.svg";
import React from "react";


const InfoTooltip = ({ onClose, isOpen, isRegister }) => {

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup_type_tooltip">
        <button
          className="popup__button-close"
          onClick={onClose}
          id="close-popup-profile"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img
          className="popup__image-status"
          src={isRegister.status ? InfotoltipSuccess : InfotoltipFailure}
          alt="Статус"
        ></img>
        <p className="popup__text-status">{isRegister.message}</p>
      </div>
    </div>
  );
};

export default InfoTooltip;
