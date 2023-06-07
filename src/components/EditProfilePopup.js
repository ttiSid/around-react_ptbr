import React, { useContext, useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  function handleProfileState(e) {
    e.target.name === "name"
      ? setName(e.target.value)
      : setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about });
    onClose();
  }

  return (
    <PopupWithForm
      modalType={"modal-profile"}
      formType={"modal-profile"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={"Editar perfil"}
      buttonText="Salvar"
      children={
        <div className="modal__container">
          <div>
            <input
              onChange={handleProfileState}
              placeholder="Name"
              className="modal__input-field input-field-name"
              type="text"
              name="name"
              id="profile-name"
              minLength="2"
              maxLength="25"
              required
            />
            <span className="modal__input-error profile-name-error"></span>
          </div>
          <div>
            <input
              onChange={handleProfileState}
              placeholder="About"
              className="modal__input-field input-field-description"
              type="text"
              name="about"
              id="about"
              minLength="2"
              maxLength="45"
              required
            />
            <span className="modal__input-error profile-description-error"></span>
          </div>
        </div>
      }
    />
  );
}
