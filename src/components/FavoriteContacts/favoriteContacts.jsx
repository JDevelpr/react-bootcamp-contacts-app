import React from "react";
import "../../assets/styles/favoriteContacts.css";
import Contact from "../contact/contact";

function FavoriteContacts() {
  return (
    <div className="favorite-contacts">
      <div className="favorite-contacts__container-title">
        <p className="favorite-contacts__title">Favorites</p>
        <div className="favorite-contacts__container-line">
          <hr className="favorite-contacts__line" />
        </div>
      </div>
      <div className="favorite-contacts__list">
        <Contact isAFavoriteContact={true} />
        <Contact isAFavoriteContact={true} />
        <Contact isAFavoriteContact={true} />
        <Contact isAFavoriteContact={true} />
        <Contact isAFavoriteContact={false} />
        <Contact isAFavoriteContact={false} />
        <Contact isAFavoriteContact={false} />
        <Contact isAFavoriteContact={false} />
      </div>
    </div>
  );
}

export default FavoriteContacts;