import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
      
      
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
