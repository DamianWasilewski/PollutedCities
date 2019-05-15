import React, { Component } from 'react';

import './CitySearchForm.css';

class CitySearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: '',
    };
  }

  componentDidMount() {
    const bagno = localStorage.getItem('inputValue');
    this.setState(() => ({text: bagno}))
  }

  onTextChange = (e) => {
    const { countries } = this.props;
    const value = e.target.value;
    localStorage.setItem('inputValue', value);
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = countries.sort().filter(country => regex.test(country));
    } 
    this.setState(() => ({ suggestions, text: value }));
  }

  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }))
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((suggestion) => <li key={suggestion} onClick={() => this.suggestionSelected(suggestion)}>{suggestion}</li>)}
      </ul>
    );
  }

  render () {
    const { text } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.props.getCities}>
          <div className="inputs-wrapper">
            <input autoComplete="off" type="text" name="country" placeholder="Country" value={text} onChange={this.onTextChange}/>
            {this.renderSuggestions()}
          </div>
          <input className="babka" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default CitySearchForm;