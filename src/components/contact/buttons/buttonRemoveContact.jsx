import React from "react";
import "../../../assets/styles/buttons/buttonRemoveContact.css";
import PropTypes from 'prop-types';

function ButtonContactRemove({ onRemove = () => { } }) {
	return (
		<div className="remove-button">
			<button className="remove-button__button" onClick={onRemove} data-testid="remove-button">
				<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
					<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
				</svg>
				REMOVE
			</button>
		</div>
	);
}

ButtonContactRemove.propTypes = {
	onRemove: PropTypes.func
};

export default ButtonContactRemove;
