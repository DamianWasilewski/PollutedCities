import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import CitySearchForm from './CitySearchForm/CitySearchForm';

class App extends Component {
  state = {
    country: '',
    error: false
  }

  getCities = (e) => {
    e.preventDefault();

    const countryName = e.target.elements.country.value;
    
    const url = `https://api.openaq.org/v1/cities?country=${countryName}&order_by=count&sort=desc&limit=10`

    axios.get(url)
    .then( response => {
      console.log(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    return (
      <div className="App">
        <CitySearchForm getCities = {this.getCities}/>
      </div>
    );
  }
}

export default App;
