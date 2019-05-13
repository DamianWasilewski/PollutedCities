import React, { Component } from 'react';

class CitySearchForm extends Component {
  state = {
    countryName: '',
    disabled: true
  }

  changeHandler(e) {
    this.setState({ countryName: e.target.value}, () => {
      if(this.state.countryName === 'Spain') {
        this.setState((prevState) => {
          return {disabled: !prevState.disabled}
        });
      }
    })
  }
  

  render () {
    let disabled = this.state.disabled
    return (
      <div>
        <form onSubmit={this.props.getCities}>
          <input type="text" name="country" placeholder="Country" value={this.state.countryName} onChange={this.changeHandler.bind(this)}/>
          <input type="submit" disabled = {disabled} value="Submit"/>
        </form>
      </div>
    )
  }
}

export default CitySearchForm;