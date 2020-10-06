import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { FAV_VIDEO_STORAGE_KEY } from '../../utils/constants';
import VideoProvider from './index';
import FavoriteIcon from '../../components/FavoriteIcon';

describe('VideoProvider', () => {
  const mockVideo = {
    id: 'someVideoid123',
    title: 'cool wize video',
    thumbnail: 'http://somecool.com/thumbnail.jpg',
    channel: 'some cool channel',
    date: '2019-02-15',
  };

  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(Storage.prototype, 'getItem');
  });

  afterEach(() => {
    localStorage.removeItem(FAV_VIDEO_STORAGE_KEY);
  });

  it('Should get favorites from localstorage', () => {
    render(
      <VideoProvider>
        <FavoriteIcon id={mockVideo.id} />
      </VideoProvider>
    );

    expect(localStorage.getItem).toHaveBeenCalledWith(FAV_VIDEO_STORAGE_KEY);
  });

  it('Should save favorites from localstorage', () => {
    render(
      <VideoProvider>
        <FavoriteIcon id={mockVideo.id} />
      </VideoProvider>
    );

    const favoriteIcon = screen.getByTestId('favorite-icon-add');

    fireEvent.click(favoriteIcon);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      FAV_VIDEO_STORAGE_KEY,
      JSON.stringify([mockVideo.id])
    );
  });

  it('Should remove current video from favorites in localstorage', async () => {
    render(
      <VideoProvider>
        <FavoriteIcon id={mockVideo.id} />
      </VideoProvider>
    );

    const favoriteIconAdd = screen.getByTestId('favorite-icon-add');

    fireEvent.click(favoriteIconAdd);

    const favoriteIconRemove = await screen.findByTestId('favorite-icon-remove');

    fireEvent.click(favoriteIconRemove);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      FAV_VIDEO_STORAGE_KEY,
      JSON.stringify([])
    );
  });
});
