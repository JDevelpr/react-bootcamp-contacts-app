import React from "react";
import "../assets/styles/contactsList.css";
import Contact from "./contact/contact";

function ContactsList() {
	return (
		<div className="contacts-list">
			<div className="contacts-list__container-title">
				<p className="contacts-list__tittle">Contacts List</p>
				<div className="contacts-list__container-line">
					<hr className="contacts-list__line" />
				</div>
			</div>
			<div className="contact-list__list">
				<Contact isAFavoriteContact={false} />
				<Contact isAFavoriteContact={false} />
				<Contact isAFavoriteContact={false} />
				<Contact isAFavoriteContact={false} />
			</div>
		</div>
	);
}

export default ContactsList;
