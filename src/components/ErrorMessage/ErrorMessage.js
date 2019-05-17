import React from 'react';

import './ErrorMessage.css'

const errorMessage = (props) => (
  <div className="errorMessage">
    <p>{props.error}</p>
  </div>
);

export default errorMessage;