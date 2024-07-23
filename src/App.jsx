import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.jsx";
import AppRouter from './routers/AppRouter';
import { ContactProvider } from './context/ContactContext';

function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
