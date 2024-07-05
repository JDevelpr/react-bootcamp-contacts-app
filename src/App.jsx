import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import FavoriteContacts from "../src/components/FavoriteContacts/favoriteContacts.jsx";
import ContactsList from "./components/ContactList/contactsList.jsx";
import NewContactForm from "./components/newContactForm/newContactForm.jsx";

function App() {
  const [count, setCount] = useState(0);
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
