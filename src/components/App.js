import { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getUserInfo().then((userInfo) => {
      setCurrentUser(userInfo);
    });
  }, []);

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

  const [selectedCard, setSelectedCard] = useState({});
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about }).then((userProfile) => {
      setCurrentUser(userProfile);
    });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
