import React, { Component } from 'react';

class CitySearchForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.value = localStorage.getItem('inputRef');
  }

  validate = () => {
    const allowedCountries = new RegExp(/spain|germany|poland|france/, 'i');
    this.setState({ disabled: !allowedCountries.test(this.inputRef.current.value)});
    localStorage.setItem('inputRef', this.inputRef.current.value);
  }
  
  state = {
    disabled: true
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.getCities}>
          <input type="text" name="country" placeholder="Country" ref={this.inputRef} onChange={this.validate}/>
          <input type="submit" disabled = {this.state.disabled} value="Submit"/>
        </form>
      </div>
    )
  }
}

export default CitySearchForm;