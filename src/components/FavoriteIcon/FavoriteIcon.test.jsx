import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import FavoriteIcon from './index';
import { VideoContext } from '../../providers/Video';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <VideoContext.Provider value={providerProps}>{ui}</VideoContext.Provider>,
    renderOptions
  );
};

describe('FavoriteIcon', () => {
  it('Should render in the DOM', () => {
    render(<FavoriteIcon />);
    const Icon = screen.getByTestId('favorite-icon-add');

    expect(Icon).toBeInTheDocument();
  });

  it('Should render as add icon', () => {
    const providerProps = {
      isFavorite: () => false,
    };

    customRender(<FavoriteIcon id="some1" />, { providerProps });
    const Icon = screen.getByTestId('favorite-icon-add');

    expect(Icon).toBeInTheDocument();
  });

  it('Should render as remove icon', () => {
    const providerProps = {
      isFavorite: () => true,
    };

    customRender(<FavoriteIcon id="some1" />, { providerProps });
    const Icon = screen.getByTestId('favorite-icon-remove');

    expect(Icon).toBeInTheDocument();
  });

  it('Should invoke addFavorite when not favorite', () => {
    const providerProps = {
      isFavorite: () => false,
      addFavorite: jest.fn(),
    };

    const id = 'some1';

    customRender(<FavoriteIcon id={id} />, { providerProps });
    const Icon = screen.getByTestId('favorite-icon-add');

    fireEvent.click(Icon);

    expect(providerProps.addFavorite).toHaveBeenCalledWith(id);
  });

  it('Should invoke removeFavorite when is favorite', () => {
    const providerProps = {
      isFavorite: () => true,
      removeFavorite: jest.fn(),
    };

    const id = 'some1';

    customRender(<FavoriteIcon id={id} />, { providerProps });
    const Icon = screen.getByTestId('favorite-icon-remove');

    fireEvent.click(Icon);

    expect(providerProps.removeFavorite).toHaveBeenCalledWith(id);
  });
});
