import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import NavBar from './index';

const mockAuth = { authenticated: false, logout: jest.fn() };

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => mockAuth),
}));

describe('NavBar', () => {
  it('Should render in the DOM', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const container = screen.getByTestId('nav-bar');

    expect(container).toBeInTheDocument();
  });

  it('Should render the NavBrand', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const brand = screen.getByTestId('nav-brand');

    expect(brand).toHaveTextContent('Youtube Client');
  });

  it('Should render the loging link when not authenticated', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const container = screen.getByTestId('nav-login');

    expect(container).toBeInTheDocument();
  });

  it('Should render the logout link when authenticated', () => {
    mockAuth.authenticated = true;

    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const container = screen.getByTestId('nav-logout');

    expect(container).toBeInTheDocument();
  });

  it('Should render the theme toggle as disabled when light', () => {
    render(
      <MemoryRouter>
        <NavBar theme="light" />
      </MemoryRouter>
    );
    const toggleInput = screen.getByTestId('nav-toggle-input');

    expect(toggleInput.checked).toBe(false);
  });

  it('Should render the theme toggle as enabled when dark', () => {
    render(
      <MemoryRouter>
        <NavBar theme="dark" />
      </MemoryRouter>
    );
    const toggleInput = screen.getByTestId('nav-toggle-input');

    expect(toggleInput.checked).toBe(true);
  });

  it('Should invoke onChangeTheme with dark value when enabling the toggle', () => {
    const onChangeTheme = jest.fn();

    render(
      <MemoryRouter>
        <NavBar theme="light" onChangeTheme={onChangeTheme} />
      </MemoryRouter>
    );
    const toggleInput = screen.getByTestId('nav-toggle-input');

    fireEvent.click(toggleInput);

    expect(onChangeTheme).toHaveBeenCalledWith('dark');
  });

  it('Should invoke onChangeTheme with light value when disabling the toggle', () => {
    const onChangeTheme = jest.fn();

    render(
      <MemoryRouter>
        <NavBar theme="dark" onChangeTheme={onChangeTheme} />
      </MemoryRouter>
    );
    const toggleInput = screen.getByTestId('nav-toggle-input');

    fireEvent.click(toggleInput);

    expect(onChangeTheme).toHaveBeenCalledWith('light');
  });

  it('Should render default links', () => {
    render(
      <MemoryRouter>
        <NavBar theme="dark" />
      </MemoryRouter>
    );
    const videosLink = screen.getByRole('link', { name: 'Videos' });
    const favoritesLink = screen.getByRole('link', { name: 'Favorites' });

    expect(videosLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
  });

  it('Should invoke logout when clicking the logout link', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const logoutLink = screen.getByTestId('nav-logout');

    fireEvent.click(logoutLink);

    expect(mockAuth.logout).toHaveBeenCalledWith();
  });
});
