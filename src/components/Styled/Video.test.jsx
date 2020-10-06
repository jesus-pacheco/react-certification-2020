import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { VideoTitle } from './Video';

describe('VideoTitle', () => {
  it('Should render pointer when not disableClick', () => {
    render(<VideoTitle title="test-title" />);

    const container = screen.getByTitle('test-title');

    expect(container).toHaveStyleRule('cursor', 'pointer');
  });

  it('Should not render pointer when disableClick', () => {
    render(<VideoTitle title="test-title" disableClick />);

    const container = screen.getByTitle('test-title');

    expect(container).toHaveStyleRule('cursor', 'default');
  });
});
