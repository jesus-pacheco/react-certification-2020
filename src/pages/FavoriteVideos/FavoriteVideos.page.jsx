import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { VideoContext } from '../../providers/Video';
import useYoutubeSearch from '../../utils/hooks/useYoutubeSearch';
import { PageLayout } from '../../components/Styled/Layout';
import { VideoList } from '../../components/Styled/Video';
import VideoCard from '../../components/VideoCard';

const FavoriteVideosPage = () => {
  const [searchId, setSearchId] = useState('');
  const { favoriteVideos, setCurrentVideo } = useContext(VideoContext);

  const history = useHistory();

  const { videoItems: returnedVideos = [] } = useYoutubeSearch({ id: searchId });

  useEffect(() => {
    if (favoriteVideos.length) {
      setSearchId(favoriteVideos);
    }
  }, [favoriteVideos]);

  const onVideoSelected = (videoId) => {
    const result = returnedVideos.find((video) => video.id === videoId);
    if (result) {
      setCurrentVideo(result);
      history.push(`/video/${videoId}`);
    }
  };

  const renderVideos = () => {
    if (!returnedVideos.length) {
      return null;
    }

    return returnedVideos.map((video) => (
      <VideoCard
        key={video.id}
        id={video.id}
        title={video.snippet.title}
        thumbnail={video.snippet.thumbnails.high.url}
        description={video.snippet.description}
        channel={video.snippet.channelTitle}
        date={video.snippet.publishedAt}
        onVideoSelected={onVideoSelected}
      />
    ));
  };

  return (
    <PageLayout>
      <VideoList>{renderVideos()}</VideoList>
    </PageLayout>
  );
};

export default FavoriteVideosPage;
