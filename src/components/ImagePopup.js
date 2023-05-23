export default function ImagePopup(props) {
  return (
    <div className="pictures-container">
      <div
        className={`popup-container ${
          Object.values(props.card).length > 0 ? "overlay" : "overlay-disable"
        }`}
      >
        <div className="popup-element">
          <button
            className="modal__close-btn popup__close-btn"
            onClick={props.onClose}
          ></button>
          <img
            className="popup__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <h2 className="picture-card__description popup__title">
            {props.card.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
