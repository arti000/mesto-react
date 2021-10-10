import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
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
  
  function closeAllPopup() {
    setIsEditAvatarPopupOpening(false);
    setIsEditProfilePopupOpening(false);
    setIsAddPlacePopupOpening(false);
    setSelectedCard()
  }
  return (
    <div className="page__content">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
      >
        <section className="popup__section">
          <input
            type="url"
            name="avatar"
            className="popup__input popup__input_type_subtitle"
            placeholder="Ссылка на фото профиля"
            required
          />
          <span className="popup__input-error"></span>
        </section>
      </PopupWithForm>
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
      >
        <section className="popup__section">
          <input
            type="text"
            name="name"
            className="popup__input popup__input_type_title"
            placeholder="Имя профиля"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error"></span>
        </section>
        <section className="popup__section">
          <input
            type="text"
            name="about"
            className="popup__input popup__input_type_subtitle"
            placeholder="Описание"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error"></span>
        </section>
      </PopupWithForm>
      <PopupWithForm
        name="add-place"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
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
        onClose={closeAllPopup}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopup} />
    </div>
  );
}

export default App;
