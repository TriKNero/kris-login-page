import React from 'react';
import './loader.css';

const Loader = ({loading}: { loading: boolean }) => {
  if (!loading) return null;
  return (
    <div className="spinner__container">
      <div className="spinner"/>
    </div>
  )
};

export default Loader;