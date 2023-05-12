function Main() {
  return (
    <main className="container">
      <section className="profile">
        <div className="profile-img-container">
          <button className="profile__edit-picture">
            <img className="profile__image" alt="profile" />
          </button>
        </div>
        <div className="wrap">
          <div className="wrap-profile">
            <div className="wrap-edit-profile">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <button className="profile__edit-button"></button>
            </div>
            <h2 className="profile__about-me">Explorar</h2>
          </div>
          <button className="profile__add-card-button"></button>
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
    </main>
  );
}

export default Main;
