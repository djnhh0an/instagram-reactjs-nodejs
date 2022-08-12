import React from 'react';

import ProfilePicture from '../Common/ProfilePicture';
import MoreSettings from '../../public/icons/more_icon';
import UserNameLabel from "../Common/UserNameLabel";

export default function ItemHeader({ moreClickEvent, username, image }) {
  return (
    <div className="feed-item-header pl-4 pr-4 bg-white flex items-center">
      <ProfilePicture src={image} size={32} username={username} />
      <UserNameLabel
        className="feed-item-header-text text-14-bold mr-1 ml-4 cursor-pointer"
        username={username || 'username'}
      />
      <button className="ml-auto flex">
        <MoreSettings onClick={moreClickEvent} />
      </button>
    </div>
  );
}
