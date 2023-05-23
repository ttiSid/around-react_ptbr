import React, { Children } from "react";

function PopupWithForm(props) {
  const { modalType, formType, title, children, buttonText, isOpen, onClose } =
    props;

  return (
    <div className="pictures-container">
      <div
        className={`general-modal ${modalType} ${
          isOpen ? "overlay" : "overlay-disable"
        }`}
      >
        <div className="modal">
          <form
            action="#"
            className={`modal-container form ${formType}`}
            noValidate
          >
            <button
              className="modal__close-btn"
              type="button"
              onClick={onClose}
            ></button>
            <h2 className="modal__title">{title}</h2>
            {children}
            <div className="modal__container">
              <button
                className="modal__submit-btn modal__submit-btn_error"
                type="submit"
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
