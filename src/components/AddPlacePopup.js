import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlaceSubmit } = props;

  const name = useRef();
  const link = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({ name: name.current.value, link: link.current.value });
    onClose();
  }

  return (
    <PopupWithForm
      modalType={"modal-card"}
      formType={"modal-card"}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      title={"Novo Local"}
      buttonText="Crie"
      children={
        <div className="modal-container">
          <div>
            <input
              ref={name}
              className="modal__input-field input-field-title"
              type="text"
              name="card-name"
              id="card-name"
              placeholder="Title"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="modal__input-error card-name-error"></span>
          </div>
          <div>
            <input
              ref={link}
              className="modal__input-field input-field-url"
              type="url"
              name="card-url"
              id="card-url"
              placeholder="Image URL"
              required
            />
            <span className="modal__input-error card-url-error"></span>
          </div>
        </div>
      }
      onClose={onClose}
    />
  );
}
