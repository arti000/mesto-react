import React from "react";
import "../index.css";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userAvatar, setAvatar] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userName, setUserName] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then((data) => {
      setAvatar(data[0].avatar);
      setUserName(data[0].name);
      setUserDescription(data[0].about);
      setCards(data[1]);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__photo-container">
          <button
            className="profile__edit-photo-btn"
            onClick={props.onEditAvatar}
          ></button>
          <img src={userAvatar} alt="Фото" className="profile__photo" />
        </div>
        <div className="profile__content">
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__open-popup"
              aria-label="Открыть попап"
              type="button"
            ></button>
            <p className="profile__subtitle">{userDescription}</p>
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
              card={
                <li className="card">
                  <button
                    className="card__remove-button"
                    aria-label="Удалить карточку"
                    type="button"
                  ></button>
                  <img
                    src={card.link}
                    alt={card.name}
                    className="card__image"
                  />
                  <div className="card__info">
                    <p className="card__title">{card.name}</p>
                    <div>
                      <button
                        className="card__like-button"
                        aria-label="Поставить лайк"
                        type="button"
                      ></button>
                      <p className="card__likes-counter">{card.likes.length}</p>
                    </div>
                  </div>
                </li>
              }
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
