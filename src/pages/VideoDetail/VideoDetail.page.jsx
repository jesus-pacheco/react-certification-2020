import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import decode from 'unescape';
import styled from 'styled-components';

import { VideoContext } from '../../providers/Video';
import useYoutubeSearch from '../../utils/hooks/useYoutubeSearch';
import { PageLayout, InlineChild } from '../../components/Styled/Layout';
import {
  VideoDetailLayout,
  RelatedVideoList,
  VideoDetailMain,
  VideoContent,
  VideoTitle,
  VideoData,
} from '../../components/Styled/Video';
import VideoCard from '../../components/VideoCard';
import FavoriteIcon from '../../components/FavoriteIcon';

const DetailTitle = styled(VideoTitle)`
  & h2 {
    font-size: 1.5em;
  }
`;

const DetailVideoContent = styled(VideoContent)`
  width: calc(970px - 2em);
`;

const VideoDetailPage = () => {
  const { id } = useParams();
  const [searchId, setSearchId] = useState('');
  const { currentVideo, setCurrentVideo } = useContext(VideoContext);

  const { videoItems: relatedVideos = [] } = useYoutubeSearch({ rel: id });

  const { videoItems: returnedVideo = [], status } = useYoutubeSearch({ id: searchId });

  const history = useHistory();

  useEffect(() => {
    if (!currentVideo) {
      setSearchId([id]);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (status === 'completed') {
      setCurrentVideo(returnedVideo[0]);
    }
    // eslint-disable-next-line
  }, [status]);

  const onVideoSelected = (videoId) => {
    const result = relatedVideos.find((video) => video.id.videoId === videoId);
    if (result) {
      setCurrentVideo(result);
      history.push(`/video/${videoId}`);
    }
  };

  const renderVideos = () => {
    if (!relatedVideos.length) {
      return null;
    }

    return relatedVideos.map((video) => (
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

  const getVideoProps = (key) => {
    const { [key]: value } = {
      title: (currentVideo && currentVideo.snippet.title) || '',
      thumbnail: (currentVideo && currentVideo.snippet.thumbnails.high.url) || '',
      description: (currentVideo && currentVideo.snippet.description) || '',
      channel: (currentVideo && currentVideo.snippet.channelTitle) || '',
      date: (currentVideo && new Date(currentVideo.snippet.publishedAt)) || new Date(),
    };

    return value;
  };

  return (
    <PageLayout>
      <VideoDetailLayout>
        <VideoDetailMain>
          <iframe
            title="video"
            width="970"
            height="550"
            frameBorder="0"
            src={`https://www.youtube.com/embed/${id}`}
          />
          <DetailVideoContent>
            <DetailTitle disableClick>
              <h2>{decode(getVideoProps('title'))}</h2>
            </DetailTitle>
            <p>{decode(getVideoProps('description'))}</p>
            <InlineChild width="80%">
              <VideoData>
                <p>{decode(getVideoProps('channel'))}</p>
              </VideoData>
              <VideoData>
                <p>{getVideoProps('date').toLocaleDateString('en-US')}</p>
              </VideoData>
            </InlineChild>
            <InlineChild width="20%">
              <FavoriteIcon id={id} />
            </InlineChild>
          </DetailVideoContent>
        </VideoDetailMain>
        <RelatedVideoList>{renderVideos()}</RelatedVideoList>
      </VideoDetailLayout>
    </PageLayout>
  );
};

export default VideoDetailPage;
