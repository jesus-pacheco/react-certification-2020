import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { YOUTUBE_DATA_API } from '../constants';

export default ({ q, rel, id }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const tmp = `?key=${process.env.REACT_APP_YOUTUBE_KEY}&part=snippet&type=video`;

    if (q || rel || id) {
      let params = '';
      let endpoint = 'search';

      if (q) {
        params = `&maxResults=20&q=${q}`;
      } else if (rel) {
        params = `&maxResults=10&relatedToVideoId=${rel}`;
      } else {
        endpoint = 'videos';
        params = `&id=${id.join(',')}`;
      }

      setUrl(`${YOUTUBE_DATA_API}/${endpoint}${tmp}${params}`);
    }
  }, [q, rel, id]);

  const {
    data: { items: videoItems },
    status,
    error,
  } = useFetch(url);

  return { videoItems, status, error };
};
