import React from "react";
import "../index.css";
import { api } from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, [currentUser]);
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__photo-container">
          <button
            className="profile__edit-photo-btn"
            onClick={props.onEditAvatar}
          ></button>
          <img
            src={currentUser?.avatar}
            alt="Фото"
            className="profile__photo"
          />
        </div>
        <div className="profile__content">
          <div className="profile__info">
            <h1 className="profile__title">{currentUser?.name}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__open-popup"
              aria-label="Открыть попап"
              type="button"
            ></button>
            <p className="profile__subtitle">{currentUser?.about}</p>
          </div>
          <button
            onClick={props.onAddPlace}
            className="profile__add-button"
            aria-label="Добавить карточку"
            type="button"
          ></button>
        </div>
      </section>
      <section className="gallery">
        <ul className="cards">
          {cards.map((card) => (
            <Card
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
              onCardClick={props.onCardClick}
              card={card}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
