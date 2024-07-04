import React from "react";
import "../../assets/styles/contact.css";
import photoUser from "../../assets/img/user-photo-profile.jpg";
import ButtonContactRemove from "./buttons/buttonRemoveContact";
import ButtonOptionsContact from "./buttons/buttonOptionsContact";

function Contact({ isAFavoriteContact }) {
  return (
    <div className="card">
      <div className={`card__avatar ${isAFavoriteContact ? 'card__avatar--contact-favorite' : ''}`}>
        <img
          src={photoUser}
          alt="User profile photo"
          className="card__image"
        />
      </div>
      <div className="card__info">
        <p className="card__name">Full Name</p>
        <p className="card__email">email@example.com</p>
      </div>
      <div className="card__container-options-contacts">
        {isAFavoriteContact ? <ButtonContactRemove /> : <ButtonOptionsContact />}
      </div>
    </div>
  );
}

export default Contact;