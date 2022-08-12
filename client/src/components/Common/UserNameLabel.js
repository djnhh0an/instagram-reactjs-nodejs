import React from 'react';

export default function UserNameLabel({ username, ...props }) {
  return (
    <a
      className="text-14-bold mr-1 cursor-pointer"
      {...props}>
      {username}
    </a>
  );
}
