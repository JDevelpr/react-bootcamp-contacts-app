// src/components/FavoriteContacts.jsx
import React, { useContext } from "react";
import "../assets/styles/favoriteContacts.css";
import Contact from "../components/contact/contact.jsx";
import { ContactContext } from "../context/ContactContext";

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
        {state.favorites.map((user) => (
          <Contact
            key={user.id}
            isAFavoriteContact={true}
            email={user.email}
            first_name={user.first_name}
            last_name={user.last_name}
            avatar={user.avatar}
            onRemoveFavorite={() => handleRemoveFavorite(user.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoriteContacts;