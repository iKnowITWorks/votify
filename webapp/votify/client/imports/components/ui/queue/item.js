import React, { PropTypes } from 'react';
import Track from '../track/track';
import Like from './like';
import Add from './add';

const getBackground = (url) => (
  { background: `url(${url}) no-repeat center center fixed` }
);

const Item = ({ track, search }) => (
  <li className="queue-item">
    <div className="background" style={getBackground(_.get(track, 'album.images.0.url'))} />
    <Track track={track} />
    {
      search && <Add track={track} /> || <Like track={track} />
    }
  </li>
);

Item.propTypes = {
  track: PropTypes.object,
  search: PropTypes.bool,
};

export default Item;
