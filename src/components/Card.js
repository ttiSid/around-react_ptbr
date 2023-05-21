export default function Card(props) {
  const { card } = props;
  return (
    <li className="picture-card">
      <button className="picture-card__delete-btn picture-card__delete-btn_hidden"></button>
      <img className="picture-card__image" alt="card" src={card.link} />
      <div className="card-wrap">
        <h2 className="picture-card__description">{card.name}</h2>
        <div>
          <button className="picture-card__like-btn picture-card__like-btn_active"></button>
          <div className="picture-card__likes">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}
