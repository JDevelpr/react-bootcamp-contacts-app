// src/components/ContactsList.jsx
import React, { useState, useEffect, useContext } from "react";
import "../assets/styles/contactsList.css";
import Contact from "../components/contact/contact";
import { ContactContext } from "../context/ContactContext";

function ContactsList() {
	const { state, dispatch } = useContext(ContactContext);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const getUsers = async (page) => {
		try {
			const response = await fetch(`https://reqres.in/api/users?page=${page}`);
			const { data, total_pages } = await response.json();
			dispatch({ type: 'SET_CONTACTS', payload: data });
			setTotalPages(total_pages);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	}

	useEffect(() => {
		getUsers(page);
	}, [page]);

	const handlePreviousPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const handleNextPage = () => {
		if (page < totalPages) {
			setPage(page + 1);
		}
	};

	const handleAddFavorite = (contact) => {
		dispatch({ type: 'ADD_FAVORITE', payload: contact });
	};

	const handleRemoveFavorite = (contactId) => {
		dispatch({ type: 'REMOVE_FAVORITE', payload: contactId });
	};

	const handleDelete = (contactId) => {
		dispatch({ type: 'DELETE_CONTACT', payload: contactId });
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
			<div className="contacts-list__pagination">
				<button className="contacts-list__pagination-button" onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
				<span className="contacts-list__pagination-info">{page} / {totalPages}</span>
				<button className="contacts-list__pagination-button" onClick={handleNextPage} disabled={page === totalPages}>Next</button>
			</div>
		</div>
	);
}

export default ContactsList;