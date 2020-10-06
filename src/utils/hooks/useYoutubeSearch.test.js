import { renderHook } from '@testing-library/react-hooks';

import useYoutubeSearch from './useYoutubeSearch';

const fakeVideos = {
  items: [{ id: 1 }, { id: 2 }],
};

jest.spyOn(global, 'fetch').mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(fakeVideos),
  })
);

describe('useYoutubeSearch', () => {
  it('set initial state', () => {
    const { result } = renderHook(() => useYoutubeSearch(''));

    expect(result.current.status).toBe('initial');
    expect(result.current.error).toBe(null);
    expect(result.current.videoItems).not.toBeDefined();
  });

  it('should set videoItems and status on completed', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useYoutubeSearch({ q: 'some query' })
    );

    expect(result.current.status).toBe('loading');
    expect(result.current.error).toBe(null);
    expect(result.current.videoItems).not.toBeDefined();

    await waitForNextUpdate();

    expect(result.current.status).toBe('completed');
    expect(result.current.error).toBe(null);
    expect(result.current.videoItems).toBe(fakeVideos.items);
  });

  it('should be triggered on rel param', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useYoutubeSearch({ rel: 'videoid' })
    );

    expect(result.current.status).toBe('loading');
    expect(result.current.error).toBe(null);
    expect(result.current.videoItems).not.toBeDefined();

    await waitForNextUpdate();

    expect(result.current.status).toBe('completed');
    expect(result.current.error).toBe(null);
    expect(result.current.videoItems).toBe(fakeVideos.items);
  });

  it('should be triggered on id param', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useYoutubeSearch({ id: ['videoid'] })
    );

    expect(result.current.status).toBe('loading');
    expect(result.current.error).toBe(null);
    expect(result.current.videoItems).not.toBeDefined();

    await waitForNextUpdate();

    expect(result.current.status).toBe('completed');
    expect(result.current.error).toBe(null);
    expect(result.current.videoItems).toBe(fakeVideos.items);
  });

  it('should set error and status on error', async () => {
    fetch.mockReturnValueOnce(Promise.reject(new Error('test error')));

    const { result, waitForNextUpdate } = renderHook(() =>
      useYoutubeSearch({ q: 'some query' })
    );

    expect(result.current.status).toBe('loading');
    expect(result.current.error).toBe(null);
    expect(result.current.videoItems).not.toBeDefined();

    await waitForNextUpdate();

    expect(result.current.status).toBe('error');
    expect(result.current.error).toBe('test error');
    expect(result.current.videoItems).not.toBeDefined();
  });
});
