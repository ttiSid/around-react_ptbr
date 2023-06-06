import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  /*----------------------------------------------------------------------*/

  return (
    <main className="container">
      <section className="profile">
        <div className="profile-img-container">
          <button className="profile__edit-picture" onClick={onEditAvatarClick}>
            <img
              className="profile__image"
              src={currentUser.avatar}
              alt="profile"
            />
          </button>
        </div>
        <div className="wrap">
          <div className="wrap-profile">
            <div className="wrap-edit-profile">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                onClick={onEditProfileClick}
              ></button>
            </div>
            <h2 className="profile__about-me">{currentUser.about}</h2>
          </div>
          <button
            className="profile__add-card-button"
            onClick={onAddPlaceClick}
          ></button>
        </div>
      </section>
      <section className="pictures">
        <ul className="pictures-container">
          {
            /* Renderiza cada elemento do array recebido pela API para o componente Card */
            cards.map((card, index) => {
              return (
                <Card
                  card={card}
                  key={index}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              );
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
