import React from 'react';

import './Modal.css';

const modal = props => (
      <div className="modal">
        <div className="modal-header"><b>Demo version notification</b></div>
        <div className="modal-content">{props.modalText}</div>
        <button onClick={props.click} className="modal-button">Confirm</button>
      </div>  
)

export default modal;