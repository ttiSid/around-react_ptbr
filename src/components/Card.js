import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `picture-card__delete-btn ${
    isOwn ? "picture-card__delete-btn" : "picture-card__delete-btn_hidden"
  }`;

  const isLiked = props.card.likes.some((user) => user._id === currentUser._id);
  const cardLikeButtonClassName = `picture-card__like-btn ${
    isLiked && "picture-card__like-btn_active"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="picture-card">
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <img
        className="picture-card__image"
        alt="card"
        src={props.card.link}
        onClick={handleClick}
      />
      <div className="card-wrap">
        <h2 className="picture-card__description">{props.card.name}</h2>
        <div>
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <div className="picture-card__likes">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}
