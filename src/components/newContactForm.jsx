import React, { useState } from "react";
import "../assets/styles/newContactForm.css"

function NewContactForm() {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsFavorite(event.target.checked);
	};

	const userData = (e) => {
		e.preventDefault();
		console.log('Exito');
		let data = e.target;
		const user = {
			avartar: "",
			email: data.email.value,
			first_name: data.first_name.value,
			id: "",
			last_name: data.last_name.value,
			isAFavoriteContact: isFavorite
		};
		console.log(user);
	};

	return (
		<div className="new-contact-form">
			<form action="" className="new-contact-form__form" onSubmit={userData}>
				<div className="new-contact-form__inputs">
					<input type="text" className="new-contact-form__input" id="first_name" placeholder="First name" />
					<input type="text" className="new-contact-form__input" id="last_name" placeholder="Last name" />
					<input type="email" className="new-contact-form__input" id="email" placeholder="Email" />
					<div className="new-contact-form__checkbox-group">
						<label htmlFor="isAFavoriteContact" className="new-contact-form__label">Enable like favorite</label>
						<input
							type="checkbox"
							id="isAFavoriteContact"
							className="new-contact-form__checkbox"
							checked={isFavorite}
							onChange={handleCheckboxChange}
						/>
					</div>
				</div>
				<button className="new-contact-form__button">SAVE</button>
			</form>
		</div>
	);
}

export default NewContactForm;
