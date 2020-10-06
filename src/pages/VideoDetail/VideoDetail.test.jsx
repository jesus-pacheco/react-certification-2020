import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import VideoDetail from './index';
import { VideoContext } from '../../providers/Video';
import { mockIDVideos, mockVideos } from '../../utils/test-mocks';

const mockRelatedResponse = { videoItems: [] };
const mockSingleResponse = { videoItems: [], status: 'initial' };
const mockId = 'testftyhs';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(() => ({
    id: mockId,
  })),
  useHistory: jest.fn(() => ({ push: jest.fn() })),
}));

jest.mock('../../utils/hooks/useYoutubeSearch', () =>
  jest.fn(({ id }) => (id ? mockSingleResponse : mockRelatedResponse))
);

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <VideoContext.Provider value={providerProps}>{ui}</VideoContext.Provider>,
    renderOptions
  );
};

describe('VideoDetail', () => {
  beforeEach(() => {
    mockSingleResponse.videoItems = [mockIDVideos.items[0]];
    mockSingleResponse.status = 'initial';
    mockRelatedResponse.videoItems = mockVideos.items.slice(0, 5);
  });

  it('Should render in the DOM', () => {
    render(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>
    );
    const detailMain = screen.getByTestId('detail-main');

    expect(detailMain).toBeInTheDocument();
  });

  it('Should render an iframe containing id', () => {
    render(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>
    );
    const iframe = screen.getByTitle('video');

    expect(iframe.src).toBe(`https://www.youtube.com/embed/${mockId}`);
  });

  it('Should render with the correct title', () => {
    const providerProps = {
      currentVideo: mockSingleResponse.videoItems[0],
      isFavorite: () => true,
    };
    customRender(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>,
      { providerProps }
    );
    const expectedTitle = providerProps.currentVideo.snippet.title;
    const title = screen.getByTestId('detail-title');

    expect(title).toHaveTextContent(expectedTitle);
  });

  it('Should render with the correct description', () => {
    const providerProps = {
      currentVideo: mockSingleResponse.videoItems[0],
      isFavorite: () => true,
    };
    customRender(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>,
      { providerProps }
    );
    const expectedDescription = providerProps.currentVideo.snippet.description;
    const description = screen.getByTestId('detail-description');

    expect(description).toHaveTextContent(expectedDescription);
  });

  it('Should render with the correct channel', () => {
    const providerProps = {
      currentVideo: mockSingleResponse.videoItems[0],
      isFavorite: () => true,
    };
    customRender(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>,
      { providerProps }
    );
    const expectedChannel = providerProps.currentVideo.snippet.channelTitle;
    const channel = screen.getByTestId('detail-channel');

    expect(channel).toHaveTextContent(expectedChannel);
  });

  it('Should render with the correct date', () => {
    const providerProps = {
      currentVideo: mockSingleResponse.videoItems[0],
      isFavorite: () => true,
    };
    customRender(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>,
      { providerProps }
    );
    const expectedDate = new Date(
      providerProps.currentVideo.snippet.publishedAt
    ).toLocaleDateString('en-US');
    const date = screen.getByTestId('detail-date');

    expect(date).toHaveTextContent(expectedDate);
  });

  it('Should invoke setCurrentVideo when no current video', () => {
    const providerProps = {
      setCurrentVideo: jest.fn(),
      isFavorite: () => true,
    };

    mockSingleResponse.status = 'completed';

    customRender(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>,
      { providerProps }
    );

    expect(providerProps.setCurrentVideo).toHaveBeenCalledWith(
      mockSingleResponse.videoItems[0]
    );
  });

  it('Should render related videos', () => {
    const providerProps = {
      setCurrentVideo: jest.fn(),
      isFavorite: () => true,
    };

    customRender(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>,
      { providerProps }
    );

    const relateList = screen.getByTestId('detail-related');

    expect(relateList.childElementCount).toBe(5);
  });

  it('Should NOT render related video cards when empty response', () => {
    const providerProps = {
      isFavorite: () => true,
    };

    mockRelatedResponse.videoItems = [];

    customRender(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>,
      { providerProps }
    );
    const videoList = screen.getByTestId('detail-related');

    expect(videoList.childElementCount).toBe(0);
  });

  it('Should invoke setCurrentVideo when selecting a related video', () => {
    const providerProps = {
      isFavorite: () => true,
      setCurrentVideo: jest.fn(),
    };
    customRender(
      <MemoryRouter>
        <VideoDetail />
      </MemoryRouter>,
      { providerProps }
    );

    const thumbnails = screen.getAllByTestId('video-card-thumbnail');

    fireEvent.click(thumbnails[0]);

    expect(providerProps.setCurrentVideo).toHaveBeenCalled();
  });
});
