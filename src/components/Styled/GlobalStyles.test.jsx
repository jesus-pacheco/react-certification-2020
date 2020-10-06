import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import GlobalStyles, { lightTheme, darkTheme } from './GlobalStyles';

describe('GlobalStyles', () => {
  it('Should render with light theme', () => {
    renderer.create(<GlobalStyles theme={lightTheme} />);

    expect(document.head).toMatchSnapshot();
  });

  it('Should render with dark theme', () => {
    renderer.create(<GlobalStyles theme={darkTheme} />);

    expect(document.head).toMatchSnapshot();
  });
});
