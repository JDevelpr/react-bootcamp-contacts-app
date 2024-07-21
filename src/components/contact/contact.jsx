import React from "react";
import "../../assets/styles/contact.css";
import PropTypes from 'prop-types';
import photoUser from "../../assets/img/user-photo-profile.jpg";
import ButtonContactRemove from "../contact/buttons/buttonRemoveContact.jsx";
import ButtonOptionsContact from "../contact/buttons/buttonOptionsContact.jsx";

function Contact({ isAFavoriteContact = false, email = "email@email.com", first_name = "Full", last_name = "Name", avatar = photoUser, onAddFavorite, onRemoveFavorite, onDelete }) {
  return (
    <div className="card">
      <div className={`card__avatar ${isAFavoriteContact ? 'card__avatar--contact-favorite' : ''}`}>
        <img
          src={avatar || photoUser}
          alt="User profile photo"
          className="card__image"
        />
      </div>
      <div className="card__info">
        <p className="card__name">{`${first_name} ${last_name}`}</p>
        <p className="card__email">{`${email}`}</p>
      </div>
      <div className="card__container-options-contacts">
        {isAFavoriteContact ? <ButtonContactRemove onRemove={onRemoveFavorite} /> : <ButtonOptionsContact onAddFavorite={onAddFavorite} onDelete={onDelete} />}
      </div>
    </div>
  );
}

Contact.propTypes = {
  isAFavoriteContact: PropTypes.bool,
  email: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  avatar: PropTypes.string,
  onAddFavorite: PropTypes.func,
  onRemoveFavorite: PropTypes.func,
  onDelete: PropTypes.func
};

// Contact.defaultProps = {
//   isAFavoriteContact: false,
//   email: "email@email.com",
//   first_name: "Full",
//   last_name: "Name",
//   avatar: photoUser,
//   onAddFavorite: () => { },
//   onRemoveFavorite: () => { },
//   onDelete: () => { }
// };

export default Contact;