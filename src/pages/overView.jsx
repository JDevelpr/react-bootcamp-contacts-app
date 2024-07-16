// src/components/Overview.jsx
import React from "react";
import FavoriteContacts from "../components/favoriteContacts";
import ContactsList from "../components/contactsList";

function Overview() {
	return (
		<>
			<FavoriteContacts />
			<ContactsList />
		</>
	);
}

export default Overview;