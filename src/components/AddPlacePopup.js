import "../index.css";
import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

function AddPlacePopup(props) {

  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
  );
}

export default AddPlacePopup;
