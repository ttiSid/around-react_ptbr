import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;

  const avatarUrl = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarUrl.current.value,
    });

    onClose();
  }

  return (
    <PopupWithForm
      modalType={"modal-profile-picture"}
      formType={"form-profile-picture"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={"Alterar a foto de perfil"}
      buttonText="Salvar..."
      children={
        <div>
          <input
            ref={avatarUrl}
            className="modal__input-field input-field-profile-url-picture"
            type="url"
            name="profile-url-picture"
            id="profile-url-picture"
            placeholder="Profile URL Picture"
            required
          />
          <span className="modal__input-error profile-url-picture-error"></span>
        </div>
      }
    />
  );
}
