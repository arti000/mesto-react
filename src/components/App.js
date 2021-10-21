import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../context/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  //Все, что касается пользователя
  const [currentUser, setCurrentUser] = React.useState({ name: "", about: "" });
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((UserInfo) => {
        setCurrentUser(UserInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  //Все, что касается попапов
  const [selectedCard, setSelectedCard] = React.useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpening] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpening] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpening] =
    React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpening(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpening(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpening(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpening(false);
    setIsEditProfilePopupOpening(false);
    setIsAddPlacePopupOpening(false);
    setSelectedCard();
  }
  //Все что касается частных функций попапов
  function handleUpdateUser({ name, about }) {
    api
      .setUserInfo({ name, about })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateAvatar({ avatar }) {
    api
      .setAvatar({ avatar })
      .then((userAvatar) => {
        setCurrentUser(userAvatar);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .createCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  //Все, что касается карточек
  const [cards, setCards] = React.useState([]);
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          cards={cards}
        />
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <PopupWithForm
          name="confirmation"
          title="Вы уверены?"
          buttonText="Да"
          isOpen={false}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
