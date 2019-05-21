import React from 'react';

import './FancyBackground.css';

function FancyBackground(props) {
  return (
    <div className="FancyBackground">
      {props.children}
    </div>
  );
}

export default FancyBackground;