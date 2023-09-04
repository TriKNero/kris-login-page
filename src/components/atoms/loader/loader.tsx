import React from 'react';
import './loader.css';

const Loader = ({loading, title}: { loading: boolean, title?: string }) => {
  if (!loading) return null;
  return (
    <div className="spinner__container">
      <div className='spinner__title'>{title}</div>
      <div className="spinner"/>
    </div>
  )
};

export default Loader;