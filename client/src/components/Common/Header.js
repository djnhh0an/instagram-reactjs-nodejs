/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import SearchBar from './SearchBar';
import HomeIcon from '../../public/icons/home_icon';
import DmIcon from '../../public/icons/dm_icon';
import ExploreIcon from '../../public/icons/explore_icon';
import ActivityIcon from '../../public/icons/activity_icon';
import HomeIconActive from '../../public/icons/home_icon_active';
import DmIconActive from '../../public/icons/dm_icon_active';
import ExploreIconActive from '../../public/icons/explore_icon_active';
import ActivityIconActive from '../../public/icons/activity_icon_active';
import ProfilePicture from '../Common/ProfilePicture';
import NoneActionLink from '../Common/NoneActionLink';
import { useRouter, useUserState } from '../../hooks';

export default function Header({ user }) {
  const router = useRouter();
  const home =
    router.pathname === '/'
      ? (<HomeIconActive className="header-icon" />)
      : (<HomeIcon className="header-icon" />);
  const messages =
    router.pathname === '/messages'
      ? (<DmIconActive className="header-icon" />)
      : (<DmIcon className="header-icon" />);
  const explore =
    router.pathname === '/explore'
      ? (<ExploreIconActive className="header-icon" />)
      : (<ExploreIcon className="header-icon" />);
  const activity =
    router.pathname === '/activity'
      ? (<ActivityIconActive className="header-icon" />)
      : (<ActivityIcon className="header-icon" />);

  const { loginUserData } = useUserState();
  return (
    <nav className="navigation fixed z-20 top-0">
      <div className="header-container">
        <NoneActionLink to="/">
          <img src="./logo.png" className="header-logo" />
        </NoneActionLink>
        <SearchBar/>
        <div className="header-icons flex ml-auto items-center">
          <NoneActionLink to="/">{home}</NoneActionLink>
          <NoneActionLink to="#">{messages}</NoneActionLink>
          <NoneActionLink to="#">{explore}</NoneActionLink>
          <NoneActionLink to="#">{activity}</NoneActionLink>
          {user && (
            <ProfilePicture
              className={
                loginUserData.username === user
                  ? 'header-profile-pic-border'
                  : ''
              }
              src={loginUserData?.image}
              username={loginUserData?.username}
              style={{
                padding: loginUserData.username === user ? '2px' : '3px',
                marginLeft: '-2px',
              }}
              size={22}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
