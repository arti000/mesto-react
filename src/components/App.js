import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpening] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpening] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpening] =
    React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpening(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpening(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpening(true);
  }
  function closeAllPopup() {
    setEditAvatarPopupOpening(false);
    setEditProfilePopupOpening(false);
    setAddPlacePopupOpening(false);
  }
  return (
    <div className="page__content">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
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
      <ImagePopup />

      <template className="card-template">
        
      </template>
    </div>
  );
}

export default App;