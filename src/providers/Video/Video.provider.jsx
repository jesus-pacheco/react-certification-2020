import React, { useState, useCallback, useEffect } from 'react';

import { FAV_VIDEO_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const VideoContext = React.createContext({
  currentVideo: null,
  setCurrentVideo: () => {},
  favoriteVideos: [],
  addFavoriteVideo: () => {},
  removeFavoriteVideo: () => {},
  isFavorite: () => {},
});

const VideoProvider = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  useEffect(() => {
    setFavoriteVideos(storage.get(FAV_VIDEO_STORAGE_KEY) || []);
  }, []);

  const addFavoriteVideo = useCallback((videoId) => {
    setFavoriteVideos((favVideos) => {
      const final = [...favVideos, videoId];
      storage.set(FAV_VIDEO_STORAGE_KEY, final);
      return final;
    });
  }, []);

  const removeFavoriteVideo = useCallback((videoId) => {
    setFavoriteVideos((favVideos) => {
      const final = favVideos.filter((item) => item !== videoId);
      storage.set(FAV_VIDEO_STORAGE_KEY, final);
      return final;
    });
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
        setCurrentVideo,
        favoriteVideos,
        addFavoriteVideo,
        removeFavoriteVideo,
        isFavorite,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
export { VideoContext };
