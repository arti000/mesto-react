import "../index.css";

function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
