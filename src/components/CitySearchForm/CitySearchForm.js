import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
    const storedInputValue = localStorage.getItem('inputValue');
    this.setState(() => ({text: storedInputValue}))
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
    localStorage.setItem('inputValue', value);
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
    const { serverError } = this.props
    return (
      <div className="component-wrapper">
        <div className="page-info">
          {serverError && <ErrorMessage error={serverError}/>}
          <h1>Pollution search</h1>
          <span><p>Type in country name and click 'Get cities' to check 10 most polluted cities in it</p></span>
        </div>
        <div className="form">
          <form onSubmit={this.props.getCities}>
            <div className="inputs-wrapper">
              <input autoComplete="off" type="text" name="country" placeholder="Country" value={text} onChange={this.onTextChange}/>
              {this.renderSuggestions()}
            </div>
            <input type="submit" value="Get cities"/>
          </form>
        </div>
      </div>
    )
  }
}

export default CitySearchForm;