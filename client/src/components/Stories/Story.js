import React from 'react';
import ProfilePicture from '../Common/ProfilePicture';
import UserNameLabel from '../Common/UserNameLabel';

export default function StoryItem({ data }) {
    return (
        <div
            className="story-item w-20 flex-shrink-0 flex flex-col justify-center items-center cursor-pointer">
            <div className="story-photo-container">
                <ProfilePicture
                    src={data.image}
                    username={data.username}
                    size={56}
                />
            </div>
            <UserNameLabel
                username={data.username}
                className="story-username text-black text-12-light mt-1"
            />
        </div>
    );
}
