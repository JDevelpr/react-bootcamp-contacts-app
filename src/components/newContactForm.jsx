import React, { useState, useContext } from "react";
import "../assets/styles/newContactForm.css";
import { ContactContext } from "../context/ContactContext";

function NewContactForm() {
	const { dispatch } = useContext(ContactContext);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [isFavorite, setIsFavorite] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleCheckboxChange = (event) => {
		setIsFavorite(event.target.checked);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const user = {
			avatar: "",
			email,
			first_name: firstName,
			last_name: lastName,
		};

		setLoading(true);
		setError("");

		try {
			const response = await fetch("https://reqres.in/api/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			if (!response.ok) {
				throw new Error("Failed to create contact");
			}
			const result = await response.json();

			const newContact = {
				...result,
				isAFavoriteContact: isFavorite,
			};

			dispatch({ type: "ADD_CONTACT", payload: newContact });

			if (isFavorite) {
				dispatch({ type: "ADD_FAVORITE", payload: newContact });
			}

			setFirstName("");
			setLastName("");
			setEmail("");
			setIsFavorite(false);
		} catch (error) {
			setError("Error creating contact: " + error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="new-contact-form">
			<form className="new-contact-form__form" onSubmit={handleSubmit}>
				<div className="new-contact-form__inputs">
					<input
						type="text"
						className="new-contact-form__input"
						id="first_name"
						placeholder="First name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
					<input
						type="text"
						className="new-contact-form__input"
						id="last_name"
						placeholder="Last name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
					<input
						type="email"
						className="new-contact-form__input"
						id="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<div className="new-contact-form__checkbox-group">
						<label htmlFor="isAFavoriteContact" className="new-contact-form__label">
							Enable like favorite
						</label>
						<input
							type="checkbox"
							id="isAFavoriteContact"
							className="new-contact-form__checkbox"
							checked={isFavorite}
							onChange={handleCheckboxChange}
						/>
					</div>
				</div>
				{error && <p className="new-contact-form__error">{error}</p>}
				<button className="new-contact-form__button" disabled={loading}>
					{loading ? "Saving..." : "SAVE"}
				</button>
			</form>
		</div>
	);
}

export default NewContactForm;
