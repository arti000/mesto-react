import "../index.css";
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

function App() {
  const [currentUser, setCurrentUser] = React.useState();
  React.useEffect(() => {
    api.getUserInfo()
    .then((UserInfo) => {
      setCurrentUser(UserInfo)
    })
    .catch((err) => console.log(err))
  }, [])
  const [selectedCard, setSelectedCard] = React.useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpening] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpening] = React.useState(false);
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

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpening(false);
    setIsEditProfilePopupOpening(false);
    setIsAddPlacePopupOpening(false);
    setSelectedCard()
  }
  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about})
    .then(userInfo => setCurrentUser(userInfo))
    .catch((err) => console.log(err))
    closeAllPopups()
  }
  function handleUpdateAvatar({avatar}) {
    api.setAvatar({avatar})
    .then(userAvatar => setCurrentUser(userAvatar))
    .catch((err) => console.log(err))
    closeAllPopups()
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
      />
      <Footer />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <PopupWithForm
        name="add-place"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <section className="popup__section">
          <input
            type="text"
            name="cardName"
            className="popup__input popup__input_type_title"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error"></span>
        </section>
        <section className="popup__section">
          <input
            type="url"
            name="cardLink"
            className="popup__input popup__input_type_subtitle"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error"></span>
        </section>
      </PopupWithForm>
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
