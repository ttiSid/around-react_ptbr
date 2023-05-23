import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [{ userName, userDescription }, getUserData] = useState("");
  /* É montado na montagem e alterações no estado dos dados */
  const [userAvatar, getUserAvatar] = useState("");
  useEffect(() => {
    api.getUser().then((data) => {
      getUserAvatar(data.avatar);
      getUserData({ userName: data.name, userDescription: data.about });
    });
  }, [userAvatar, userName, userDescription]);

  /*----------------------------------------------------------------------*/

  const [cards, getCard] = useState([]);
  /* É montado somente uma vez */
  useEffect(() => {
    const newCards = api.getCards();

    return () =>
      /* api.getCards().then((cardList) => { */
      newCards.then((cardList) => {
        cardList.map((card) => {
          return getCard((cards) => [...cards, card]);
        });
      });
  }, []);

  return (
    <main className="container">
      <section className="profile">
        <div className="profile-img-container">
          <button className="profile__edit-picture" onClick={onEditAvatarClick}>
            <img className="profile__image" src={userAvatar} alt="profile" />
          </button>
        </div>
        <div className="wrap">
          <div className="wrap-profile">
            <div className="wrap-edit-profile">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                onClick={onEditProfileClick}
              ></button>
            </div>
            <h2 className="profile__about-me">{userDescription}</h2>
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
              return <Card card={card} key={index} onCardClick={onCardClick} />;
            })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;
