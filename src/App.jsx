import React from 'react';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
