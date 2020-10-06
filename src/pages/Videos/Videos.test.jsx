import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Videos from './index';
import { VideoContext } from '../../providers/Video';
import { mockVideos } from '../../utils/test-mocks';

const mockResponse = { videoItems: [] };

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(() => ({ push: jest.fn() })),
}));

jest.mock('../../utils/hooks/useYoutubeSearch', () => jest.fn(() => mockResponse));

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <VideoContext.Provider value={providerProps}>{ui}</VideoContext.Provider>,
    renderOptions
  );
};

describe('Videos', () => {
  beforeEach(() => {
    mockResponse.videoItems = mockVideos.items.slice(0, 5);
  });

  it('Should render in the DOM', () => {
    render(
      <MemoryRouter>
        <Videos />
      </MemoryRouter>
    );
    const videoList = screen.getByTestId('video-list');

    expect(videoList).toBeInTheDocument();
  });

  it('Should render search input', () => {
    render(
      <MemoryRouter>
        <Videos />
      </MemoryRouter>
    );
    const videoSearch = screen.getByTestId('search-input-container');

    expect(videoSearch).toBeInTheDocument();
  });

  it('Should NOT render video cards when empty response', () => {
    const providerProps = {
      isFavorite: () => true,
    };

    mockResponse.videoItems = [];

    customRender(
      <MemoryRouter>
        <Videos />
      </MemoryRouter>,
      { providerProps }
    );
    const videoList = screen.getByTestId('video-list');

    expect(videoList.childElementCount).toBe(0);
  });

  it('Should render video cards', () => {
    render(
      <MemoryRouter>
        <Videos />
      </MemoryRouter>
    );

    const videoList = screen.getByTestId('video-list');

    expect(videoList.childElementCount).toBe(5);
  });

  it('Should invoke setCurrentVideo when selecting a video', () => {
    const providerProps = {
      setCurrentVideo: jest.fn(),
      isFavorite: () => true,
    };
    customRender(
      <MemoryRouter>
        <Videos />
      </MemoryRouter>,
      { providerProps }
    );
    const thumbnails = screen.getAllByTestId('video-card-thumbnail');

    fireEvent.click(thumbnails[0]);

    expect(providerProps.setCurrentVideo).toHaveBeenCalled();
  });
});
