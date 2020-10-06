import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import FavoriteVideos from './index';
import { VideoContext } from '../../providers/Video';
import { mockIDVideos } from '../../utils/test-mocks';

const mockResponse = { videoItems: [] };

jest.mock('../../utils/hooks/useYoutubeSearch', () => jest.fn(() => mockResponse));

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <VideoContext.Provider value={providerProps}>{ui}</VideoContext.Provider>,
    renderOptions
  );
};

describe('FavoriteVideos', () => {
  beforeEach(() => {
    mockResponse.videoItems = mockIDVideos.items;
  });

  it('Should render in the DOM', () => {
    render(
      <MemoryRouter>
        <FavoriteVideos />
      </MemoryRouter>
    );
    const videoList = screen.getByTestId('video-list');

    expect(videoList).toBeInTheDocument();
  });

  it('Should NOT render video cards when empty response', () => {
    const providerProps = {
      favoriteVideos: mockIDVideos.items.map((video) => video.id),
      isFavorite: () => true,
    };

    mockResponse.videoItems = [];

    customRender(
      <MemoryRouter>
        <FavoriteVideos />
      </MemoryRouter>,
      { providerProps }
    );
    const videoList = screen.getByTestId('video-list');

    expect(videoList.childElementCount).toBe(0);
  });

  it('Should render the video cards', () => {
    const providerProps = {
      favoriteVideos: mockIDVideos.items.map((video) => video.id),
      isFavorite: () => true,
    };
    customRender(
      <MemoryRouter>
        <FavoriteVideos />
      </MemoryRouter>,
      { providerProps }
    );
    const videoList = screen.getByTestId('video-list');

    expect(videoList.childElementCount).toBe(4);
  });

  it('Should invoke setCurrentVideo when selecting a video', () => {
    const providerProps = {
      favoriteVideos: mockIDVideos.items.map((video) => video.id),
      isFavorite: () => true,
      setCurrentVideo: jest.fn(),
    };
    customRender(
      <MemoryRouter>
        <FavoriteVideos />
      </MemoryRouter>,
      { providerProps }
    );

    const thumbnails = screen.getAllByTestId('video-card-thumbnail');

    fireEvent.click(thumbnails[0]);

    expect(providerProps.setCurrentVideo).toHaveBeenCalled();
  });
});
