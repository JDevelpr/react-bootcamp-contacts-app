import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from "../components/contact/contact.jsx";
import photoUser from "../assets/img/user-photo-profile.jpg";
import { describe, it, expect, vi } from 'vitest';

describe("Contact Component", () => {
    const mockAddFavorite = vi.fn();
    const mockRemoveFavorite = vi.fn();
    const mockDelete = vi.fn();

    it("renders contact information correctly", () => {
        render(
            <Contact
                first_name="John"
                last_name="Doe"
                email="john.doe@example.com"
                avatar={photoUser}
                isAFavoriteContact={false}
                onAddFavorite={mockAddFavorite}
                onRemoveFavorite={mockRemoveFavorite}
                onDelete={mockDelete}
            />
        );

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', photoUser);
    });

    it("renders remove favorite button when isAFavoriteContact is true", () => {
        render(
            <Contact
                first_name="Jane"
                last_name="Doe"
                email="jane.doe@example.com"
                avatar={photoUser}
                isAFavoriteContact={true}
                onAddFavorite={mockAddFavorite}
                onRemoveFavorite={mockRemoveFavorite}
                onDelete={mockDelete}
            />
        );

        expect(screen.getByTestId('remove-button')).toBeInTheDocument();
    });

    it("renders add favorite and delete buttons when isAFavoriteContact is false", () => {
        render(
            <Contact
                first_name="Alice"
                last_name="Smith"
                email="alice.smith@example.com"
                avatar={photoUser}
                isAFavoriteContact={false}
                onAddFavorite={mockAddFavorite}
                onRemoveFavorite={mockRemoveFavorite}
                onDelete={mockDelete}
            />
        );

        expect(screen.getByTestId('add-favorite-button')).toBeInTheDocument();
        expect(screen.getByTestId('delete-button')).toBeInTheDocument();
    });

    it("calls onAddFavorite when add favorite button is clicked", () => {
        render(
            <Contact
                first_name="Bob"
                last_name="Johnson"
                email="bob.johnson@example.com"
                avatar={photoUser}
                isAFavoriteContact={false}
                onAddFavorite={mockAddFavorite}
                onRemoveFavorite={mockRemoveFavorite}
                onDelete={mockDelete}
            />
        );

        fireEvent.click(screen.getByTestId('add-favorite-button'));
        expect(mockAddFavorite).toHaveBeenCalled();
    });

    it("calls onDelete when delete button is clicked", () => {
        render(
            <Contact
                first_name="Eve"
                last_name="Davis"
                email="eve.davis@example.com"
                avatar={photoUser}
                isAFavoriteContact={false}
                onAddFavorite={mockAddFavorite}
                onRemoveFavorite={mockRemoveFavorite}
                onDelete={mockDelete}
            />
        );

        fireEvent.click(screen.getByTestId('delete-button'));
        expect(mockDelete).toHaveBeenCalled();
    });

    it("does not render add favorite button when isAFavoriteContact is true", () => {
        render(
            <Contact
                first_name="Charlie"
                last_name="Brown"
                email="charlie.brown@example.com"
                avatar={photoUser}
                isAFavoriteContact={true}
                onAddFavorite={mockAddFavorite}
                onRemoveFavorite={mockRemoveFavorite}
                onDelete={mockDelete}
            />
        );

        expect(screen.queryByTestId('add-favorite-button')).toBeNull();
    });

    it("does not render remove favorite button when isAFavoriteContact is false", () => {
        render(
            <Contact
                first_name="Diana"
                last_name="Prince"
                email="diana.prince@example.com"
                avatar={photoUser}
                isAFavoriteContact={false}
                onAddFavorite={mockAddFavorite}
                onRemoveFavorite={mockRemoveFavorite}
                onDelete={mockDelete}
            />
        );

        expect(screen.queryByTestId('remove-button')).toBeNull();
    });
});
