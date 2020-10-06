import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchInput from './index';

describe('SearchInput', () => {
  it('Should render in the DOM', () => {
    render(<SearchInput />);
    const container = screen.getByTestId('search-input-container');

    expect(container).toBeInTheDocument();
  });

  it('Should render with the initial value', () => {
    render(<SearchInput value="Wizeline" />);
    const input = screen.getByTestId('search-input');

    expect(input.value).toBe('Wizeline');
  });

  it('Should invoke onSearchChange prop after search debounce', () => {
    const onSearchChange = jest.fn();

    render(<SearchInput onSearchChange={onSearchChange} />);
    const input = screen.getByTestId('search-input');

    jest.useFakeTimers();

    fireEvent.change(input, { target: { value: 'new search' } });

    expect(setTimeout).toHaveBeenCalled();

    jest.runAllTimers();

    expect(onSearchChange).toHaveBeenCalledWith('new search');
  });
});
