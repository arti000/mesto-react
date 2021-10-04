import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
      <article className="popup edit-popup">
        <div className="popup__container">
          <button
            className="popup__close"
            aria-label="Закрыть попап"
            type="button"
          ></button>
          <form className="popup__content" name="Edit-form">
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <button type="submit" className="popup__submit">
              Сохранить
            </button>
          </form>
        </div>
      </article>
      <article className="popup add-popup">
        <div className="popup__container">
          <button
            className="popup__close"
            aria-label="Закрыть попап"
            type="button"
          ></button>
          <form className="popup__content" name="Add-form">
            <h2 className="popup__title">Новое место</h2>
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
            <button type="submit" className="popup__submit">
              Создать
            </button>
          </form>
        </div>
      </article>
      <article className="popup image-popup">
        <div className="preview">
          <button
            className="popup__close"
            aria-label="Закрыть попап"
            type="button"
          ></button>
          <div className="preview__image">
            <img src="#" alt="#" className="popup__image" />
          </div>
          <p className="popup__title image-popup__title"></p>
        </div>
      </article>
      <article className="popup confirm-popup">
        <div className="popup__container">
          <button
            className="popup__close"
            aria-label="Закрыть попап"
            type="button"
          ></button>
          <form className="popup__content" name="Card-delete-form">
            <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
            <button type="submit" className="popup__submit">
              Да
            </button>
          </form>
        </div>
      </article>
      <article className="popup update-avatar-popup">
        <div className="popup__container">
          <button
            className="popup__close"
            aria-label="Закрыть попап"
            type="button"
          ></button>
          <form className="popup__content" name="Update-avatar-form">
            <h2 className="popup__title">Обновить аватар</h2>
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
            <button type="submit" className="popup__submit">
              Сохранить
            </button>
          </form>
        </div>
      </article>
      <template className="card-template">
        <li className="card">
          <button
            className="card__remove-button"
            aria-label="Удалить карточку"
            type="button"
          ></button>
          <img src="#" alt="#" className="card__image" />
          <div className="card__info">
            <p className="card__title"></p>
            <div>
              <button
                className="card__like-button"
                aria-label="Поставить лайк"
                type="button"
              ></button>
              <p className="card__likes-counter">0</p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
