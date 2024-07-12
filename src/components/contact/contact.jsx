import React from "react";
import "../../assets/styles/contact.css";
import PropTypes from 'prop-types';
import photoUser from "../../assets/img/user-photo-profile.jpg";
import ButtonContactRemove from "./buttons/buttonRemoveContact";
import ButtonOptionsContact from "./buttons/buttonOptionsContact";
// import withMountingTimeLogging from "../hoc/withMountingTimeLogging.jsx";

function Contact({ isAFavoriteContact = false, email = "email@email.com", first_name = "Full", last_name = "Name", avatar = photoUser }) {
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
        <p className="card__email">{email}</p>
      </div>
      <div className="card__container-options-contacts">
        {isAFavoriteContact ? <ButtonContactRemove /> : <ButtonOptionsContact />}
      </div>
    </div>
  );
}

Contact.propTypes = {
  isAFavoriteContact: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

// export default withMountingTimeLogging(Contact);
export default Contact;
