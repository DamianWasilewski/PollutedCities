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

    const countryName = e.target.elements.country.value.charAt(0).toUpperCase() + e.target.elements.country.value.slice(1);
    
    const url = 'https://api.openaq.org/v1/countries'

    axios
    .get(url)
    .then(response => {
      const country = response.data.results.find(el => el.name === countryName);
      return axios.get(`https://api.openaq.org/v1/cities?country=${country.code}&order_by=count&sort=desc&limit=10`)
    })
    .then(response => {
      console.log(response.data.results)
    })
    .catch(error => { 
      console.log(error)
    })
  }
  render () {
    return (
      <div className="App">
        <CitySearchForm getCities={this.getCities}/>
      </div>
    );
  }
}

export default App;
