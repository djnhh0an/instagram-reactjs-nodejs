import React from 'react';

export default function ProfilePicture({
  src,
  username,
  size,
  border,
  href,
  ...props
}) {
  return (
    <span {...props} onClick={() => {
    }}>
      <img
        alt={`${username}'s profile pic`}
        data-testid="user-avatar"
        draggable="false"
        src={src}
        style={{
          width: size,
          height: size,
          borderRadius: size,
          border: border && '2px solid white',
          cursor: 'pointer',
        }}
      />
    </span>
  );
}
