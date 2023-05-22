import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = useState(false);
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          modalType={"modal-profile"}
          formType={"modal-profile"}
          isOpen={isEditProfilePopupOpen}
          title={"Editar perfil"}
          buttonText="Salvar"
          children={
            <div className="modal__container">
              <div>
                <input
                  placeholder="Name"
                  className="modal__input-field input-field-name"
                  type="text"
                  name="profile-name"
                  id="profile-name"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="modal__input-error profile-name-error"></span>
              </div>
              <div>
                <input
                  placeholder="About"
                  className="modal__input-field input-field-description"
                  type="text"
                  name="profile-description"
                  id="profile-description"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span className="modal__input-error profile-description-error"></span>
              </div>
            </div>
          }
          onClose={closeAllPopups}
        />
        <PopupWithForm
          modalType={"modal-card"}
          formType={"modal-card"}
          isOpen={isAddPlacePopupOpen}
          title={"Novo Local"}
          buttonText="Crie"
          children={
            <div className="modal-container">
              <div>
                <input
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
          onClose={closeAllPopups}
        />
        <PopupWithForm
          modalType={"modal-profile-picture"}
          formType={"form-profile-picture"}
          isOpen={isEditAvatarPopupOpen}
          title={"Alterar a foto de perfil"}
          buttonText="Salvar..."
          children={
            <div>
              <input
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
          onClose={closeAllPopups}
        />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <Footer />
      </div>
    </>
  );
}

export default App;
