import React from 'react';
import ActivityIcon from '../../public/icons/activity_icon';
import CommentIcon from '../../public/icons/comment_icon';
import DmIcon from '../../public/icons/dm_icon';
import SaveIcon from '../../public/icons/save_icon';
import NoneActionLink from '../Common/NoneActionLink';

export default function ItemButtons({ ...props }) {
  return (
    <div {...props}>
      <NoneActionLink className="feed-item-buttons m-2">
        <ActivityIcon height={24} width={24} size={24} />
      </NoneActionLink>
      <NoneActionLink className="feed-item-buttons m-2">
        <CommentIcon height={24} width={24} />
      </NoneActionLink>
      <NoneActionLink className="feed-item-buttons m-2">
        <DmIcon height={24} width={24} />
      </NoneActionLink>
      <NoneActionLink className="feed-item-buttons m-2 ml-auto">
        <SaveIcon height={24} width={24} />
      </NoneActionLink>
    </div>
  );
}
