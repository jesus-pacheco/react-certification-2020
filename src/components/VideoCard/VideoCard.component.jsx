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

export default ({ id, title, thumbnail, channel, date, onVideoSelected }) => {
  const parsedDate = new Date(date);

  return (
    <VideoCard>
      <VideoThumbnail
        title={decode(title)}
        src={thumbnail}
        onClick={() => onVideoSelected(id)}
      />
      <VideoContent>
        <VideoTitle onClick={() => onVideoSelected(id)}>
          <h2>{decode(title)}</h2>
        </VideoTitle>
        <InlineChild width="80%">
          <VideoData>
            <p>{decode(channel)}</p>
          </VideoData>
          <VideoData>
            <p>{parsedDate.toLocaleDateString('en-US')}</p>
          </VideoData>
        </InlineChild>
        <InlineChild width="20%">
          <FavoriteIcon id={id} />
        </InlineChild>
      </VideoContent>
    </VideoCard>
  );
};
