import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { VideoContext } from '../../providers/Video';
import useYoutubeSearch from '../../utils/hooks/useYoutubeSearch';
import { PageLayout } from '../../components/Styled/Layout';
import { VideoList } from '../../components/Styled/Video';
import SearchInput from '../../components/SearchInput';
import VideoCard from '../../components/VideoCard';

const TopContainer = styled.div`
  padding-bottom: 3rem;
`;

const VideosPage = () => {
  const [search, setSearch] = useState('');
  const { setCurrentVideo } = useContext(VideoContext);

  const history = useHistory();
  const { videoItems = [] } = useYoutubeSearch({ q: search });

  const onVideoSelected = (videoId) => {
    const result = videoItems.find((video) => video.id.videoId === videoId);
    if (result) {
      setCurrentVideo(result);
      history.push(`/video/${videoId}`);
    }
  };

  const renderVideos = () => {
    if (!videoItems.length) {
      return null;
    }

    return videoItems.map((video) => (
      <VideoCard
        key={video.id.videoId}
        id={video.id.videoId}
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
      <TopContainer>
        <SearchInput value="Wizeline" onSearchChange={(term) => setSearch(term)} />
      </TopContainer>
      <VideoList data-testid="video-list">{renderVideos()}</VideoList>
    </PageLayout>
  );
};

export default VideosPage;
