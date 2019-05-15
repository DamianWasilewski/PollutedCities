import React, { Component } from 'react';

import './CityOutput.css';


class CityOutput extends Component {
  state = {
    visible: false
  }
  descriptionTogglerHandler = () => {
    this.setState({ visible: !this.state.visible })
  };
  render() {
    const { city, description } = this.props;
    const { visible } = this.state;
    let descriptionClasses = 'output-record description'
    if (visible) {
      descriptionClasses = 'output-record description open';
    }

    return (
      <div className="output">
        <div className="output-record"><b>City:</b> {city}</div>
        <button onClick={this.descriptionTogglerHandler}>Read more</button>
        <div className={descriptionClasses}>{description}</div>
      </div>
    )
  }
};

export default CityOutput;