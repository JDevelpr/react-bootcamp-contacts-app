// src/test/FavoriteContacts.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FavoriteContacts from '../components/favoriteContacts.jsx';
import { ContactContext } from '../context/ContactContext';
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter

const mockDispatch = vi.fn();

const renderWithContext = (state) => {
    render(
        <MemoryRouter>
            <ContactContext.Provider value={{ state, dispatch: mockDispatch }}>
                <FavoriteContacts />
            </ContactContext.Provider>
        </MemoryRouter>
    );
};

describe('FavoriteContacts', () => {
    it('renders the component with title and empty state', () => {
        const state = { favorites: [] };

        renderWithContext(state);

        expect(screen.getByText('Favorites')).toBeInTheDocument();
        expect(screen.getByText("Oh! It looks like you dont have favorite contacts yet.")).toBeInTheDocument();
        expect(screen.getByText('Add contacts to favorites.')).toBeInTheDocument();
    });

    it('renders the list of favorite contacts when there are favorites', () => {
        const state = {
            favorites: [
                { id: 1, email: 'john.doe@example.com', first_name: 'John', last_name: 'Doe', avatar: '' },
                { id: 2, email: 'jane.doe@example.com', first_name: 'Jane', last_name: 'Doe', avatar: '' }
            ]
        };

        renderWithContext(state);

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });

    it('calls handleRemoveFavorite when remove button is clicked', () => {
        const state = {
            favorites: [
                { id: 1, email: 'john.doe@example.com', first_name: 'John', last_name: 'Doe', avatar: '' }
            ]
        };

        renderWithContext(state);

        fireEvent.click(screen.getByRole('button', { name: /remove/i }));

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'REMOVE_FAVORITE',
            payload: 1
        });
    });
});
