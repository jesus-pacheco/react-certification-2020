import styled from 'styled-components';

const VideoList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding-bottom: 40px;
`;

const VideoDetailLayout = styled.section`
  display: grid;
  grid-template-columns: 485px 485px 485px;
  grid-template-rows: auto;
  grid-template-areas: 'main main side';
`;

const VideoDetailMain = styled.section`
  grid-area: main;
`;

const RelatedVideoList = styled.section`
  grid-area: side;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-self: center;
  grid-row-gap: 10px;
  padding-bottom: 40px;
`;

const VideoCard = styled.article`
  height: 320px;
  width: 350px;
  min-width: 350px;
  background-color: ${(props) => props.theme.bgCard};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const VideoTitle = styled.div`
  margin-bottom: 1em;
  cursor: ${(props) => (props.disableClick ? 'default' : 'pointer')};
  & h2 {
    font-size: 1em;
    text-decoration: none;
    color: inherit;
    border: 0;
    line-height: 1.4em;
    display: inline-block;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & h2:hover {
    text-shadow: none;
  }
`;

const VideoData = styled.div`
  & p {
    font-size: 14px;
    color: ${(props) => props.theme.cardDataText};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const VideoThumbnail = styled.div`
  display: block;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 190px;
  width: 350px;
  min-width: 350px;
  /* border-radius: 10px 10px 0 0; */
  background-image: ${(props) => `url("${props.src}")`};
`;

const VideoContent = styled.div`
  padding-top: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
`;

export {
  VideoList,
  VideoDetailLayout,
  VideoCard,
  VideoTitle,
  VideoContent,
  VideoThumbnail,
  VideoData,
  RelatedVideoList,
  VideoDetailMain,
};
