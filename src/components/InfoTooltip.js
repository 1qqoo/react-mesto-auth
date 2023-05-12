import InfotoltipSuccess from "../images/Union.svg";
import InfotoltipFailure from "../images/Union-krestik.svg";

const InfoTooltip = (props) => {
  return (
    <div className="infotooltip">
      <div className="infotooltip__container">
        <img
          className="infotooltip__image"
          src={props.isSuccess ? InfotoltipSuccess : InfotoltipFailure}
          alt="Картинка регистрации"
        />
        <p className="infotooltip__paragraph">
          {props.isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
        <button
          onClick={props.onClose}
          className="button popup__button-close"
          type="button"
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  );
};
export default InfoTooltip;
