import React, { Component } from 'react';

class CitySearchForm extends Component {
  state = {
    countryName: ''
  }

  changeHandler(e) {
    this.setState({ countryName: e.target.value})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.getCities}>
          <input type="text" name="country" placeholder="Country" value={this.state.countryName} onChange={this.changeHandler.bind(this)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default CitySearchForm;