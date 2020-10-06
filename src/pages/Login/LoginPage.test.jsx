import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Login from './index';

const mockAuth = { authenticated: false, login: jest.fn() };

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => mockAuth),
}));

describe('Login', () => {
  it('Should render in the DOM', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const loginForm = screen.getByTestId('login-form');

    expect(loginForm).toBeInTheDocument();
  });

  it('Should invoke login when submiting the form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const loginForm = screen.getByTestId('login-form');

    fireEvent.submit(loginForm);

    expect(mockAuth.login).toHaveBeenCalled();
  });
});
