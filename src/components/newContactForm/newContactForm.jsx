import React from "react";
import "../../assets/styles/newContactForm.css"


function NewContactForm() {
	return (
		<div className="new-contact-form">
			<form action="" className="new-contact-form__form">
				<div className="new-contact-form__inputs">
					<input type="text" className="new-contact-form__input" placeholder="First name" />
					<input type="text" className="new-contact-form__input" placeholder="Last name" />
					<input type="email" className="new-contact-form__input" placeholder="Email" />
					<div className="new-contact-form__checkbox-group">
						<label htmlFor="" className="new-contact-form__label">Enable like favorite</label>
						<input type="checkbox" className="new-contact-form__checkbox" />
					</div>
				</div>
				<button className="new-contact-form__button">SAVE</button>
			</form>
		</div>
	);
}

export default NewContactForm; 