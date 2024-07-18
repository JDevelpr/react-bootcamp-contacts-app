import React, { useEffect, useContext } from "react";
import "../assets/styles/contactsList.css";
import Contact from "../components/contact/contact";
import { ContactContext } from "../context/ContactContext";

function ContactsList() {
	const { state, dispatch } = useContext(ContactContext);

	const getUsers = async () => {
		try {
			const responses = await Promise.all([
				fetch(`https://reqres.in/api/users?page=1`),
				fetch(`https://reqres.in/api/users?page=2`)
			]);
			const data = await Promise.all(responses.map(response => response.json()));
			const users = data.flatMap(pageData => pageData.data);
			dispatch({ type: 'SET_CONTACTS', payload: users });
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	}

	useEffect(() => {
		getUsers();
	}, []);

	const handleAddFavorite = (contact) => {
		dispatch({ type: 'ADD_FAVORITE', payload: contact });
	};

	const handleRemoveFavorite = (contactId) => {
		dispatch({ type: 'REMOVE_FAVORITE', payload: contactId });
	};

	const handleDelete = async (contactId) => {
		try {
			const response = await fetch(`https://reqres.in/api/users/${contactId}`, {
				method: 'DELETE',
			});
			if (response.ok) {
				dispatch({ type: 'DELETE_CONTACT', payload: contactId });
			} else {
				console.error("Error deleting contact:", response.statusText);
			}
		} catch (error) {
			console.error("Error deleting contact:", error);
		}
	};

	return (
		<div className="contacts-list">
			<div className="contacts-list__container-title">
				<p className="contacts-list__title">Contacts List</p>
				<div className="contacts-list__container-line">
					<hr className="contacts-list__line" />
				</div>
			</div>
			<div className="contact-list__list">
				{state.contacts.map((user) => (
					<Contact
						key={user.id}
						isAFavoriteContact={state.favorites.some(fav => fav.id === user.id)}
						email={user.email}
						first_name={user.first_name}
						last_name={user.last_name}
						avatar={user.avatar}
						onAddFavorite={() => handleAddFavorite(user)}
						onRemoveFavorite={() => handleRemoveFavorite(user.id)}
						onDelete={() => handleDelete(user.id)}
					/>
				))}
			</div>
		</div>
	);
}

export default ContactsList;