import React, { useState } from 'react';
import UserNameLabel from '../Common/UserNameLabel';

export default function ItemComment({ data }) {
  const [showMore, setShowMore] = useState(data?.description.length < 80);

  return (
    <div className="overflow-hidden mx-4 text-14-light inherit">
      <UserNameLabel username={data.username} />
      <span className={!showMore ? 'feed-item-text-description ' : 'inherit'}>
        {data?.description || 'Sample description.'}
      </span>
      {!showMore && (
        <span style={{ color: '#9a9a9a' }} onClick={() => setShowMore(true)}>
          {' '}
          more
        </span>
      )}
    </div>
  );
}
