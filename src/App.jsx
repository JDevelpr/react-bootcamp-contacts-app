import React from 'react';
import "./App.css";
import Header from "./components/header";
import ContactsList from "./components/contactsList.jsx"
import NewContactForm from "./components/newContactForm.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* <FavoriteContacts />
        <ContactsList /> */}
        <NewContactForm />
        <ContactsList />
      </main>
    </div>
  );
}

export default App;
