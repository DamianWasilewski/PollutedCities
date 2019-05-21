import React, { Component } from 'react';
import './CityOutput.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


class CityOutput extends Component {
  state = {
    visible: false
  }
  descriptionTogglerHandler = () => {
    this.setState({ visible: !this.state.visible })
  };
  render() {
    library.add(faPlusSquare);
    const { city, description } = this.props;
    const { visible } = this.state;
    let descriptionClasses = 'output-record description'
    if (visible) {
      descriptionClasses = 'output-record description open';
    }

    return (
      <div className="output-record">
        <div className="output-record__row-wrapper">
          <div className="output-record__city">
            <b>City:</b> {city}
          </div>
          <div className="output-record__button">
            <button onClick={this.descriptionTogglerHandler}><FontAwesomeIcon icon="plus-square" /></button>
          </div>
        </div>
        <div className={descriptionClasses}>{description}</div>
      </div>

    )
  }
};

export default CityOutput;