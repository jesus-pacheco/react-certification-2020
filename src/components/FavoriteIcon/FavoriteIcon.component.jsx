import React, { useContext } from 'react';
import styled from 'styled-components';

import { VideoContext } from '../../providers/Video';
import { FavoriteIcon } from '../Styled/Video';
import { ReactComponent as HeartIcon } from '../../img/heart-icon.svg';
import filledHeartIcon from '../../img/filled-heart-icon.svg';

const ThemedHeartIcon = styled(HeartIcon)`
  fill: ${(props) => props.theme.cardDataText};
  cursor: pointer;
  display: block;
  height: 20px;
  margin-left: auto;
`;

export default ({ id }) => {
  const { addFavoriteVideo, removeFavoriteVideo, isFavorite } = useContext(VideoContext);

  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFavoriteVideo(id);
    } else {
      addFavoriteVideo(id);
    }
  };

  const renderIcon = () => {
    if (!isFavorite(id)) {
      return <ThemedHeartIcon onClick={toggleFavorite} />;
    }

    return <FavoriteIcon src={filledHeartIcon} onClick={toggleFavorite} />;
  };

  return renderIcon();
};
