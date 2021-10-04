import "../index.css";

function Main() {
    function handleEditAvatarClick() {
      document.querySelector('.update-avatar-popup').classList.add('popup_opened');
    }
    function handleEditProfileClick() {
      document.querySelector('.edit-popup').classList.add('popup_opened');
    }
    function handleAddPlaceClick() {
      document.querySelector('.add-popup').classList.add('popup_opened');
    }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__photo-container">
          <button 
            className="profile__edit-photo-btn"
            onClick={handleEditAvatarClick}
          ></button>
          <img src="#" alt="Фото" className="profile__photo" />
        </div>
        <div className="profile__content">
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              onClick={handleEditProfileClick}
              className="profile__open-popup"
              aria-label="Открыть попап"
              type="button"
            ></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button
            onClick={handleAddPlaceClick}
            className="profile__add-button"
            aria-label="Добавить карточку"
            type="button"
          ></button>
        </div>
      </section>
      <section className="gallery">
        <ul className="cards"></ul>
      </section>
      
    </main>
    
  );
}

export default Main;
