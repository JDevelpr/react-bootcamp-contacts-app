import React, { useContext } from "react";
import "../assets/styles/favoriteContacts.css";
import Contact from "../components/contact/contact.jsx";
import { ContactContext } from "../context/ContactContext";
import { Link } from "react-router-dom";

function FavoriteContacts() {
  const { state, dispatch } = useContext(ContactContext);

  const handleRemoveFavorite = (contactId) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: contactId });
  };

  return (
    <div className="favorite-contacts">
      <div className="favorite-contacts__container-title">
        <p className="favorite-contacts__title">Favorites</p>
        <div className="favorite-contacts__container-line">
          <hr className="favorite-contacts__line" />
        </div>
      </div>
      <div className="favorite-contacts__list">
        {state.favorites.length === 0 ? (
          <div className="favorite-contacts__empty">
            <p className="favorite-contacts__empty-message">
              Oh! It looks like you dont have favorite contacts yet.
            </p>
            <Link to="/new_contacts" className="favorite-contacts__empty-add">
              <p className="favorite-contacts__empty-add">
                Add contacts to favorites.
              </p>
            </Link>
          </div>
        ) : (
          state.favorites.map((user) => (
            <Contact
              key={user.id}
              isAFavoriteContact={true}
              email={user.email}
              first_name={user.first_name}
              last_name={user.last_name}
              avatar={user.avatar}
              onRemoveFavorite={() => handleRemoveFavorite(user.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default FavoriteContacts;