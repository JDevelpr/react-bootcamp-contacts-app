import React from 'react';
import "./App.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/header.jsx";
import AppRouter from './routers/AppRouter';
import { ContactProvider } from './context/ContactContext';

function AppContent() {
  const location = useLocation();
  const showHeader = location.pathname !== '/notfound'; // ajusta esta condición según sea necesario

  return (
    <>
      {showHeader && <Header />}
      <AppRouter />
    </>
  );
}

function App() {
  return (
    <ContactProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ContactProvider>
  );
}

export default App;
