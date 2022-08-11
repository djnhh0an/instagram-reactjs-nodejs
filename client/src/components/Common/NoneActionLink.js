import React from 'react';
import { Link } from 'react-router-dom';

export default function NoneActionLink({ href, children, ...props }) {
  return (
    <Link to={href || ''}>
      <div {...props} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </Link>
  );
}
