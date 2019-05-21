import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './CitySearchForm.css';

class CitySearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: '',
      selected: -1
    };
  }

  componentDidMount() {
    const storedInputValue = localStorage.getItem('inputValue');
    this.setState(() => ({text: storedInputValue}))
  }

  onTextChange = (e) => {
    const { countries } = this.props;
    const value = e.target.value.replace(/[&\/\\#,+()$~%.'":*?<>{}\[\]]/g, '');
    localStorage.setItem('inputValue', value);
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = countries.sort().filter(country => regex.test(country));
    } else {
      this.setState({ selected: -1 })
    }
    this.setState(() => ({ suggestions: suggestions.slice(0, 3), text: value}));
  }

  suggestionSelected (value) {
    this.props.getCities(this.state.text);
    this.setState(() => ({
      text: value,
      suggestions: [],
      selected: -1
    }));
    localStorage.setItem('inputValue', value);
  }

  handleArrows = (e) => {
    if (e.keyCode === 38) {
      this.setState(prevState => ({
        selected: prevState.selected > 0 ? prevState.selected - 1 : prevState.selected,
        text: this.state.suggestions[prevState.selected > 0 ? prevState.selected - 1 : prevState.selected],
      }))
    }
    if (e.keyCode === 40) {
      this.setState(prevState => ({
        selected: prevState.selected + 1 === prevState.suggestions.length ? prevState.selected : prevState.selected + 1,
        text: this.state.suggestions[prevState.selected + 1 === prevState.suggestions.length ? prevState.selected : prevState.selected + 1],
    }))
    }
    if (e.keyCode === 13) {
      this.suggestionSelected(this.state.text)
    }
  }

  handleMouse = (key, text) => {
      this.setState({ selected: key, text })
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((suggestion, i) =>  {
          return <li
              onMouseEnter={() => this.handleMouse(i, suggestion)}
              className={this.state.selected === i ? 'selected' : ''}
              key={suggestion}
              onClick={() => this.suggestionSelected(this.state.text)}>{suggestion}</li>
        })}
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
            <div className="inputs-wrapper">
              <input autoComplete="off" type="text" name="country" placeholder="Country" value={text || ''} onChange={this.onTextChange} onKeyDown={this.handleArrows}/>
              {this.renderSuggestions()}
            </div>
          <button value="Get cities" onClick={() => this.suggestionSelected(this.state.text)}>Get Cities</button>
        </div>
      </div>
    )
  }
}

export default CitySearchForm;