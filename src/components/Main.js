import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  return (
    <main className="container">
      <section className="profile">
        <div className="profile-img-container">
          <button className="profile__edit-picture" onClick={onEditAvatarClick}>
            <img className="profile__image" alt="profile" />
          </button>
        </div>
        <div className="wrap">
          <div className="wrap-profile">
            <div className="wrap-edit-profile">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <button
                className="profile__edit-button"
                onClick={onEditProfileClick}
              ></button>
            </div>
            <h2 className="profile__about-me">Explorar</h2>
          </div>
          <button
            className="profile__add-card-button"
            onClick={onAddPlaceClick}
          ></button>
        </div>
      </section>
      <section className="pictures">
        <ul className="pictures-container">
          <template className="card">
            <li className="picture-card">
              <button className="picture-card__delete-btn picture-card__delete-btn_hidden"></button>
              <img className="picture-card__image" alt="card" />
              <div className="card-wrap">
                <h2 className="picture-card__description"></h2>
                <div>
                  <button className="picture-card__like-btn picture-card__like-btn_active"></button>
                  <div className="picture-card__likes"></div>
                </div>
              </div>
            </li>
          </template>
          <template id="popup">
            <div className="popup-container">
              <div className="popup-element">
                <button className="modal__close-btn popup__close-btn"></button>
                <img className="popup__image" src="#" alt="" />
                <h2 className="picture-card__description popup__title"></h2>
              </div>
            </div>
          </template>
        </ul>
      </section>
      <template id="modal-profile">
        <div className="general-modal modal-profile overlay-disable">
          <div className="modal">
            <form
              action="#"
              className="modal-container form form-profile"
              noValidate
            >
              <button className="modal__close-btn" type="button"></button>
              <h2 className="modal__title">Editar perfil</h2>
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
                <button
                  className="modal__submit-btn modal__submit-btn_error"
                  type="submit"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </template>
      <template id="modal-card">
        <div className="general-modal modal-card overlay-disable">
          <div className="modal">
            <form
              action="#"
              className="modal-container form form-card"
              noValidate
            >
              <button className="modal__close-btn" type="button"></button>
              <h2 className="modal__title">Novo Local</h2>
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
              <button className="modal__submit-btn" type="submit">
                Crie
              </button>
            </form>
          </div>
        </div>
      </template>
      <template id="modal-card-delete">
        <div className="general-modal modal-card-delete overlay">
          <div className="modal">
            <form action="#" className="form">
              <div className="modal-confirm">
                <button className="modal__close-btn" type="button"></button>
                <h2 className="modal__title">Tem certeza?</h2>
                <button className="modal__submit-btn">Sim</button>
              </div>
            </form>
          </div>
        </div>
      </template>
      <template id="modal-profile-picture">
        <div className="general-modal modal-profile-picture overlay">
          <div className="modal">
            <form
              action="#"
              className="modal-container form form-profile-picture"
            >
              <button className="modal__close-btn" type="button"></button>
              <h2 className="modal__title">Alterar a foto de perfil</h2>
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
              <button className="modal__submit-btn" type="submit">
                Salvar...
              </button>
            </form>
          </div>
        </div>
      </template>
    </main>
  );
}

export default Main;
