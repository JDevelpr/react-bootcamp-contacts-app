import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import NewContactForm from '../components/newContactForm.jsx';
import { ContactContext } from '../context/ContactContext';

const mockDispatch = vi.fn();

beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ id: 1, avatar: '', email: 'john.doe@example.com', first_name: 'John', last_name: 'Doe' }),
        })
    );
});

const renderWithContext = () => {
    render(
        <ContactContext.Provider value={{ dispatch: mockDispatch }}>
            <NewContactForm />
        </ContactContext.Provider>
    );
};

describe('NewContactForm', () => {
    it('renders the form with inputs and button', () => {
        renderWithContext();
        expect(screen.getByPlaceholderText('First name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByText('SAVE')).toBeInTheDocument();
    });

    it('displays loading state when form is submitting', async () => {
        globalThis.fetch = vi.fn(() =>
            new Promise((resolve) =>
                setTimeout(() =>
                    resolve({
                        json: () => Promise.resolve({ id: 1, avatar: '', email: 'john.doe@example.com', first_name: 'John', last_name: 'Doe' }),
                    }), 1000)
            )
        );

        renderWithContext();

        fireEvent.change(screen.getByPlaceholderText('First name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText('Last name'), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });

        fireEvent.click(screen.getByText('SAVE'));

        expect(screen.getByText('Saving...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.queryByText('Saving...')).not.toBeInTheDocument();
        });
    });

    it('displays error message when fetch fails', async () => {
        globalThis.fetch = vi.fn(() =>
            Promise.reject(new Error('Network Error'))
        );

        renderWithContext();

        fireEvent.change(screen.getByPlaceholderText('First name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText('Last name'), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });

        fireEvent.click(screen.getByText('SAVE'));

        await waitFor(() => {
            expect(screen.getByText('Error creating contact: Network Error')).toBeInTheDocument();
        });
    });
});
