import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import VideoCard from './index';

describe('VideoCard', () => {
  const mockVideo = {
    id: 'someVideoid123',
    title: 'cool wize video',
    thumbnail: 'http://somecool.com/thumbnail.jpg',
    channel: 'some cool channel',
    date: '2019-02-15',
  };

  it('Should render in the DOM', () => {
    render(<VideoCard />);
    const container = screen.getByTestId('video-card-container');

    expect(container).toBeInTheDocument();
  });

  it('Should render with the correct thumbnail', () => {
    render(<VideoCard thumbnail={mockVideo.thumbnail} />);
    const thumbnail = screen.getByTestId('video-card-thumbnail');

    expect(thumbnail).toHaveStyleRule(
      'background-image',
      `url("${mockVideo.thumbnail}")`
    );
  });

  it('Should invoke onVideoSelected after thumbnail click passing video id', () => {
    const onVideoSelected = jest.fn();

    render(<VideoCard id={mockVideo.id} onVideoSelected={onVideoSelected} />);

    const thumbnail = screen.getByTestId('video-card-thumbnail');

    fireEvent.click(thumbnail);

    expect(onVideoSelected).toHaveBeenCalledWith(mockVideo.id);
  });

  it('Should render with the correct title', () => {
    render(<VideoCard title={mockVideo.title} />);
    const title = screen.getByTestId('video-card-title');

    expect(title).toHaveTextContent(mockVideo.title);
  });

  it('Should invoke onVideoSelected after title click passing video id', () => {
    const onVideoSelected = jest.fn();

    render(
      <VideoCard
        id={mockVideo.id}
        title={mockVideo.title}
        onVideoSelected={onVideoSelected}
      />
    );

    const title = screen.getByTestId('video-card-title');

    fireEvent.click(title);

    expect(onVideoSelected).toHaveBeenCalledWith(mockVideo.id);
  });

  it('Should render with the correct channel', () => {
    render(<VideoCard channel={mockVideo.channel} />);
    const channel = screen.getByTestId('video-card-channel');

    expect(channel).toHaveTextContent(mockVideo.channel);
  });

  it('Should render with the correct date', () => {
    render(<VideoCard date={mockVideo.date} />);
    const date = screen.getByTestId('video-card-date');
    const parsedDate = new Date(mockVideo.date).toLocaleDateString('en-US');

    expect(date).toHaveTextContent(parsedDate);
  });
});
