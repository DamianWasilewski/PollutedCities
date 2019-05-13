import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import CitySearchForm from './CitySearchForm/CitySearchForm';

class App extends Component {
  state = {
    cityName: '',
    error: false
  }

  render () {
    return (
      <div className="App">
        <CitySearchForm />
      </div>
    );
  }
}

export default App;
