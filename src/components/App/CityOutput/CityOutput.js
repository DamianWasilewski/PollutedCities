import React from 'react';

const cityOutput = (props) => (
  <div className="output">
    <div className="output-record"><b>City:</b> {props.city}</div>
    <div className="output-record">{props.description}</div>
  </div>
);

export default cityOutput;