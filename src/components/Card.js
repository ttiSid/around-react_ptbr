export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="picture-card">
      <button className="picture-card__delete-btn picture-card__delete-btn_hidden"></button>
      <img
        className="picture-card__image"
        alt="card"
        src={props.card.link}
        onClick={handleClick}
      />
      <div className="card-wrap">
        <h2 className="picture-card__description">{props.card.name}</h2>
        <div>
          <button className="picture-card__like-btn picture-card__like-btn"></button>
          <div className="picture-card__likes">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}
