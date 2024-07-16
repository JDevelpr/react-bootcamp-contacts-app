// src/context/ContactContext.jsx
import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
    contacts: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

const ContactContext = createContext(initialState);

const contactReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.payload
            };
        case 'ADD_FAVORITE':
            const updatedFavoritesAdd = [...state.favorites, action.payload];
            localStorage.setItem('favorites', JSON.stringify(updatedFavoritesAdd));
            return {
                ...state,
                favorites: updatedFavoritesAdd
            };
        case 'REMOVE_FAVORITE':
            const updatedFavoritesRemove = state.favorites.filter(contact => contact.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(updatedFavoritesRemove));
            return {
                ...state,
                favorites: updatedFavoritesRemove
            };
        case 'DELETE_CONTACT':
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload);
            const updatedFavoritesDelete = state.favorites.filter(contact => contact.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(updatedFavoritesDelete));
            return {
                ...state,
                contacts: updatedContacts,
                favorites: updatedFavoritesDelete
            };
        default:
            return state;
    }
};

const ContactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contactReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]);

    return (
        <ContactContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactContext.Provider>
    );
};

export { ContactContext, ContactProvider };