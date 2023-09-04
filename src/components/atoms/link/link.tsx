import React from 'react';
import './link.css';

function Link({children, ...props}) {
  return <a className="link" {...props}>{children}</a>;
}

export { Link };