import React, { useState, useEffect } from "react";
import "../assets/styles/contactsList.css";
import Contact from "../components/contact/contact";

function ContactsList() {
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		try {
			const response = await fetch("https://reqres.in/api/users?page=1");
			const { data } = await response.json();
			setUsers(data);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	}
	useEffect(() => {
		getUsers();
	}, [])
	return (
		<div className="contacts-list">
			<div className="contacts-list__container-title">
				<p className="contacts-list__tittle">Contacts List</p>
				<div className="contacts-list__container-line">
					<hr className="contacts-list__line" />
				</div>
			</div>
			<div className="contact-list__list">
				{
					users.map((user) => {
						return (
							<Contact key={user.id} isAFavoriteContact={false} email={user.email} first_name={user.first_name} last_name={user.last_name} avatar={user.avatar} />
						);
					})
				}
			</div>
		</div>
	);
}

export default ContactsList;
