import React, { useContext } from 'react';
import styled from 'styled-components';

import { VideoContext } from '../../providers/Video';
import { ReactComponent as HeartIcon } from '../../img/heart-icon.svg';
import { ReactComponent as HeartIconFilled } from '../../img/heart-icon-filled.svg';

const ThemedIcon = styled.div`
  fill: ${(props) => props.theme.cardDataText};
  cursor: pointer;
  display: block;
  height: 20px;
  margin-left: auto;
`;

export default ({ id }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(VideoContext);

  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const renderIcon = () => {
    if (!isFavorite(id)) {
      return (
        <ThemedIcon
          as={HeartIcon}
          onClick={toggleFavorite}
          data-testid="favorite-icon-add"
        />
      );
    }

    return (
      <ThemedIcon
        as={HeartIconFilled}
        onClick={toggleFavorite}
        data-testid="favorite-icon-remove"
      />
    );
  };

  return renderIcon();
};
