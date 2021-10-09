import "../index.css";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="card">
      <button
        className="card__remove-button"
        aria-label="Удалить карточку"
        type="button"></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
        onClick={handleClick}
      />
      <div className="card__info">
        <p className="card__title">{props.card.name}</p>
        <div>
          <button
            className="card__like-button"
            aria-label="Поставить лайк"
            type="button"
          ></button>
          <p className="card__likes-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;