import React from 'react';
import decode from 'unescape';

import {
  VideoCard,
  VideoTitle,
  VideoContent,
  VideoThumbnail,
  VideoData,
} from '../Styled/Video';
import { InlineChild } from '../Styled/Layout';
import FavoriteIcon from '../FavoriteIcon';

export default ({ id, title = '', thumbnail, channel, date = null, onVideoSelected }) => {
  const parsedDate = new Date(date);

  return (
    <VideoCard data-testid="video-card-container">
      <VideoThumbnail
        title={decode(title)}
        src={thumbnail}
        onClick={() => onVideoSelected(id)}
        data-testid="video-card-thumbnail"
      />
      <VideoContent>
        <VideoTitle onClick={() => onVideoSelected(id)} data-testid="video-card-title">
          <h2>{decode(title)}</h2>
        </VideoTitle>
        <InlineChild width="80%">
          <VideoData data-testid="video-card-channel">
            <p>{decode(channel)}</p>
          </VideoData>
          <VideoData data-testid="video-card-date">
            <p>{parsedDate.toLocaleDateString('en-US')}</p>
          </VideoData>
        </InlineChild>
        <InlineChild width="20%">
          <FavoriteIcon id={id} data-testid="video-card-favorite" />
        </InlineChild>
      </VideoContent>
    </VideoCard>
  );
};
