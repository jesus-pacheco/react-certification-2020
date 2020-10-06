import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Private from './index';

const mockAuth = { authenticated: false, logout: () => {} };
const TestComponent = () => <div data-testid="test-comp">Some Component</div>;

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => mockAuth),
}));

describe('Private', () => {
  it('Should NOT render children when not authenticated', () => {
    render(
      <MemoryRouter>
        <Private>
          <TestComponent />
        </Private>
      </MemoryRouter>
    );
    const test = screen.queryByTestId('test-comp');

    expect(test).not.toBeInTheDocument();
  });

  it('Should render children when is authenticated', () => {
    mockAuth.authenticated = true;

    render(
      <MemoryRouter>
        <Private>
          <TestComponent />
        </Private>
      </MemoryRouter>
    );
    const test = screen.getByTestId('test-comp');

    expect(test).toBeInTheDocument();
  });

  it('Should render children when is authenticated', () => {
    mockAuth.authenticated = true;

    render(
      <MemoryRouter>
        <Private>
          <TestComponent />
        </Private>
      </MemoryRouter>
    );
    const test = screen.getByTestId('test-comp');

    expect(test).toBeInTheDocument();
  });
});
