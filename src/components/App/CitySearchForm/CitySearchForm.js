import React, { Component } from 'react';

class CitySearchForm extends Component {
  state = {
    cityName: ''
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.getCities}>
          <input type="text" name="country" placeholder="Country"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default CitySearchForm;