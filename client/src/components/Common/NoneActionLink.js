import React from 'react';
import { Link } from 'react-router-dom';

export default function NoneActionLink({ to, children, ...props }) {
  return (
    <Link to={to || ''}>
      <div {...props} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </Link>
  );
}
