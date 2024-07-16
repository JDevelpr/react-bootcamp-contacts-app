// src/routers/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactsList from "../components/contactsList";
import FavoriteContacts from "../components/favoriteContacts";
import AddNewContactView from "../pages/addNewContactView.jsx";
import Overview from "../pages/overView";

function AppRouter() {
	return (
		<Routes>
			<Route path="/overview" element={<Overview />} />
			<Route path="/contact_list" element={<ContactsList />} />
			<Route path="/favorite_contacts" element={<FavoriteContacts />} />
			<Route path="/new_contacts" element={<AddNewContactView />} />
			<Route path="/" element={<Overview />} />
		</Routes>
	);
}

export default AppRouter;