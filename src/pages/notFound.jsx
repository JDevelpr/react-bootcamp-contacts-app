import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../assets/img/omg-404-not-found-removebg-preview.png';
import '../assets/styles/notFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <img className="not-found__image" src={img404} alt="404 Not Found" />
            <div className="not-found__content">
                <h1 className="not-found__heading">Ohh :(</h1>
                <h1 className="not-found__heading">404 Page not found</h1>
                <Link className="not-found__link" to={"/overview"}>
                    <p className="not-found__text">Return to overview</p>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
