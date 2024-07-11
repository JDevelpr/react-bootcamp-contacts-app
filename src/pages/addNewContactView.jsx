import React from "react";
import NewContactForm from "../components/newContactForm";
import ContactsList from "../components/contactsList";

function AddNewContactView() {
	return (
		<>
			<NewContactForm />
			<ContactsList />
		</>
	)
}

export default AddNewContactView;