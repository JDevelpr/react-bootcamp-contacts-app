import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import FavoriteContacts from "../src/components/FavoriteContacts/favoriteContacts.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <main>
        <FavoriteContacts />
      </main>
    </div>
  );
}

export default App;
