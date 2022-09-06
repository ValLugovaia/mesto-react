import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  const onEditAvatar = () => props.handleEditAvatarClick();
  const onEditProfile = () => props.handleEditProfileClick();
  const onAddPlace = () => props.handleAddPlaceClick();
  const onCardClick = (card) => props.handleCardClick(card);
  const onCardLike = (card) => props.handleCardLike(card);
  const onCardDelete = (card) => props.handleCardDelete(card);

    return (
        <main className="content">
        <section className="profile">
          <div className="profile__item">
            <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={onEditAvatar}>
              <button className="profile__avatar-edit-button" type="button"></button>
            </div>
            <div className="profile__description">
              <div className="profile__heading">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
              </div>
              <p className="profile__about">{currentUser.about}</p>
            </div>
          </div>
          <button className="profile__photo-add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="photo">{props.cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}></Card>
        ))}</section>
      </main>
  );
}

export default Main;