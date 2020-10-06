import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NotFound from './index';

describe('NotFound', () => {
  it('Should render in the DOM', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('home-link');

    expect(homeLink).toBeInTheDocument();
  });

  it('Should invoke login when submiting the form', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const image = screen.getByTestId('404-image');

    expect(image).toBeInTheDocument();
  });
});
