import { useReducer, useEffect, useRef } from 'react';
import { FETCH_LOADING, FETCH_COMPLETE, FETCH_ERROR } from '../constants';

const initialState = {
  status: 'initial',
  error: null,
  data: {},
};

export default (url) => {
  const cache = useRef({});

  const [state, dispatch] = useReducer((innerState, action) => {
    switch (action.type) {
      case FETCH_LOADING:
        return { ...initialState, status: 'loading' };
      case FETCH_COMPLETE:
        return { ...initialState, status: 'completed', data: action.payload };
      case FETCH_ERROR:
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return innerState;
    }
  }, initialState);

  useEffect(() => {
    let isUnmounted = false;

    if (!url) {
      return;
    }

    const fetchData = async () => {
      dispatch({ type: FETCH_LOADING });

      if (cache.current[url]) {
        const data = cache.current[url];

        dispatch({ type: FETCH_COMPLETE, payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;

          if (isUnmounted) {
            return;
          }

          dispatch({ type: FETCH_COMPLETE, payload: data });
        } catch (error) {
          if (isUnmounted) {
            return;
          }

          dispatch({ type: FETCH_ERROR, payload: error.message });
        }
      }
    };

    fetchData();

    return () => {
      isUnmounted = true;
    };
  }, [url]);

  return state;
};
