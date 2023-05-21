import React, { Children } from "react";

function PopupWithForm(props) {
  const { modalType, formType, ModalTitle, children, buttonSubmit } = props;

  return (
    <div className={`general-modal ${modalType} overlay-disable`}>
      <div className="modal">
        <form
          action="#"
          className={`modal-container form ${formType}`}
          noValidate
        >
          <button className="modal__close-btn" type="button"></button>
          <h2 className="modal__title">{ModalTitle}</h2>
          {children}
          <div className="modal__container">
            <button
              className="modal__submit-btn modal__submit-btn_error"
              type="submit"
            >
              {buttonSubmit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
