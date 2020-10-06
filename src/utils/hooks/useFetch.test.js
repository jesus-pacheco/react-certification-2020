import { renderHook } from '@testing-library/react-hooks';

import useFetch from './useFetch';

const fakeUser = {
  name: 'Joni Baez',
  age: '32',
  address: '123, Charming Avenue',
};

jest.spyOn(global, 'fetch').mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(fakeUser),
  })
);

describe('useFetch', () => {
  it('set initial state', () => {
    const { result } = renderHook(() => useFetch(''));

    expect(result.current.status).toBe('initial');
    expect(result.current.error).toBe(null);
    expect(result.current.data).toEqual({});
  });

  it('should set data and status on completed', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('http://mock.com/api')
    );

    expect(result.current.status).toBe('loading');
    expect(result.current.error).toBe(null);
    expect(result.current.data).toEqual({});

    await waitForNextUpdate();

    expect(result.current.status).toBe('completed');
    expect(result.current.error).toBe(null);
    expect(result.current.data).toBe(fakeUser);
  });

  it('should set error and status on error', async () => {
    fetch.mockReturnValueOnce(Promise.reject(new Error('test error')));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('http://mock.com/api')
    );

    expect(result.current.status).toBe('loading');
    expect(result.current.error).toBe(null);
    expect(result.current.data).toEqual({});

    await waitForNextUpdate();

    expect(result.current.status).toBe('error');
    expect(result.current.error).toBe('test error');
    expect(result.current.data).toEqual({});
  });

  it('should not leave side effects', async () => {
    const { result, unmount } = renderHook(() => useFetch('http://mock.com/api'));

    expect(result.current.status).toBe('loading');
    expect(result.current.error).toBe(null);
    expect(result.current.data).toEqual({});

    unmount();

    expect(result.current.status).toBe('loading');
    expect(result.current.error).toBe(null);
    expect(result.current.data).toEqual({});
  });
});
