import React, { useState, useContext } from "react";
import "../assets/styles/newContactForm.css";
import { ContactContext } from "../context/ContactContext";

function NewContactForm() {
	const { dispatch } = useContext(ContactContext);
	const [isFavorite, setIsFavorite] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsFavorite(event.target.checked);
	};

	const userData = async (e) => {
		e.preventDefault();
		let data = e.target;

		const user = {
			avatar: "",
			email: data.email.value,
			first_name: data.first_name.value,
			last_name: data.last_name.value,
		};

		setLoading(true);
		try {
			const response = await fetch("https://reqres.in/api/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			const result = await response.json();

			const newContact = {
				...result,
				isAFavoriteContact: isFavorite,
			};

			dispatch({ type: "ADD_CONTACT", payload: newContact });

			if (isFavorite) {
				dispatch({ type: "ADD_FAVORITE", payload: newContact });
			}

			data.reset();
			setIsFavorite(false);
		} catch (error) {
			console.error("Error creating contact:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="new-contact-form">
			<form className="new-contact-form__form" onSubmit={userData}>
				<div className="new-contact-form__inputs">
					<input type="text" className="new-contact-form__input" id="first_name" placeholder="First name" required />
					<input type="text" className="new-contact-form__input" id="last_name" placeholder="Last name" required />
					<input type="email" className="new-contact-form__input" id="email" placeholder="Email" required />
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
				<button className="new-contact-form__button" disabled={loading}>
					{loading ? "Saving..." : "SAVE"}
				</button>
			</form>
		</div>
	);
}

export default NewContactForm;
