import React from "react";
import "../assets/styles/header.css";
import logoGlobant from "../assets/img/globant-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container-logo">
        <a href="#" className="header__link-home">
          <img src={logoGlobant} alt="" className="header__logo" />
        </a>
      </div>
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">Overview</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">Contacts</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">Favorites</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              <button className="header__button--green">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
                New
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;