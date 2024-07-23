import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/header.css";
import logoGlobant from "../assets/img/globant-logo.svg";

function Header() {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <header className="header">
      <div className="header__container-logo">
        <Link to="/overview" className="header__link-home">
          <img src={logoGlobant} alt="logo of Globant" className={`header__logo ${activeLink === "/overview" ? "header__link--green" : ""}`} />
        </Link>
      </div>
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/overview" className={`header__link ${activeLink === "/overview" ? "header__link--green" : ""}`}>Overview</Link>
          </li>
          <li className="header__item">
            <Link to="/contact_list" className={`header__link ${activeLink === "/contact_list" ? "header__link--green" : ""}`}>Contacts</Link>
          </li>
          <li className="header__item">
            <Link to="/favorite_contacts" className={`header__link ${activeLink === "/favorite_contacts" ? "header__link--green" : ""}`}>Favorites</Link>
          </li>
          <li className="header__item">
            <Link to="/new_contacts" className={`header__link ${activeLink === "/new_contacts" ? "header__link--green" : ""}`}>
              <button className="header__button--green">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
                New
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;