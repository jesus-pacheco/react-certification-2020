import React, { useCallback, useReducer } from 'react';

import {
  FAV_VIDEO_STORAGE_KEY,
  SET_CURRENT_VIDEO,
  ADD_FAVORITE_VIDEO,
  REMOVE_FAVORITE_VIDEO,
} from '../../utils/constants';
import { storage } from '../../utils/storage';

const VideoContext = React.createContext({
  currentVideo: null,
  favoriteVideos: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  setCurrentVideo: () => {},
  isFavorite: () => {},
});

const VideoProvider = ({ children }) => {
  const [{ currentVideo, favoriteVideos }, dispatch] = useReducer(
    (innerState, action) => {
      switch (action.type) {
        case SET_CURRENT_VIDEO:
          return { ...innerState, currentVideo: action.payload };
        case ADD_FAVORITE_VIDEO: {
          const final = [...innerState.favoriteVideos, action.payload];
          storage.set(FAV_VIDEO_STORAGE_KEY, final);
          return { ...innerState, favoriteVideos: final };
        }
        case REMOVE_FAVORITE_VIDEO: {
          const final = innerState.favoriteVideos.filter(
            (item) => item !== action.payload
          );
          storage.set(FAV_VIDEO_STORAGE_KEY, final);
          return { ...innerState, favoriteVideos: final };
        }
        default:
          return innerState;
      }
    },
    {
      currentVideo: null,
      favoriteVideos: storage.get(FAV_VIDEO_STORAGE_KEY) || [],
    }
  );

  const addFavorite = useCallback((id) => {
    dispatch({ type: ADD_FAVORITE_VIDEO, payload: id });
  }, []);

  const removeFavorite = useCallback((id) => {
    dispatch({ type: REMOVE_FAVORITE_VIDEO, payload: id });
  }, []);

  const setCurrentVideo = useCallback((video) => {
    dispatch({ type: SET_CURRENT_VIDEO, payload: video });
  }, []);

  const isFavorite = useCallback(
    (videoId) => {
      if (!favoriteVideos.length) {
        return false;
      }
      return !!favoriteVideos.find((item) => item === videoId);
    },
    [favoriteVideos]
  );

  return (
    <VideoContext.Provider
      value={{
        currentVideo,
        favoriteVideos,
        isFavorite,
        addFavorite,
        removeFavorite,
        setCurrentVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
export { VideoContext };
