import React from 'react';

const errorMessage = (props) => (
  <div className="errorMessage">
  <span className="error">{props.error}</span>
  </div>
);

export default errorMessage;