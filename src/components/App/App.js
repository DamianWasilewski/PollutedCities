import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import countries from '../../countriesList';
import CitySearchForm from './CitySearchForm/CitySearchForm';
import CityOutput from './CityOutput/CityOutput';
import ErrorMessage from './ErrorMessage/ErrorMessage';

class App extends Component {
  state = {
    country: '',
    error: false,
    cities: [],
    infoMessage: ''
  }

  getCities = (e) => {
    e.preventDefault();

    const countryName = e.target.elements.country.value.charAt(0).toUpperCase() + e.target.elements.country.value.slice(1);
    
    const countryUrl = 'https://api.openaq.org/v1/countries';
    const wikiUrl ='https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&category=city&redirects&origin=*&titles=';
    const allowedCountries = new RegExp(/spain|germany|poland|france/, 'i');

    if (allowedCountries.test(countryName)) {
      axios
      .get(countryUrl)
      .then( response => {
        const country = response.data.results.find(el => el.name === countryName);
        return axios.get(`https://api.openaq.org/v1/cities?country=${country.code}&order_by=count&sort=desc&limit=10`)
      })
      .then( response => {
        const cities = response.data.results.map(record => {
          return { name: record.city };
        });
        cities.forEach(city => {
          axios
          .get(wikiUrl + city.name)
          .then( response => {
            let id;
            for (let key in response.data.query.pages) {
              id = key;
            }
            const description = response.data.query.pages[id].extract;
            this.setState(prevState => ({
              cities: [...prevState.cities, {city: `${city.name}`, description}],
              infoMessage: prevState.infoMessage = ''
            }))
          })
        })
      })
      .catch(error => { 
        console.log('oopsie, something went wrong', error)
      })
    } else {
      this.setState(prevState => ({
        infoMessage: prevState.infoMessage = 'This is demo version of our application and is working only for Spain, Poland, Germany and France',
        cities: [...prevState.cities = []]
      }))
    }
  }

  render () {
    return (
      <div className="App">
        <ErrorMessage error={this.state.infoMessage}/>
        <div className="form-wrapper">
          <CitySearchForm getCities={this.getCities} getInformation={this.getInformation} countries={countries}/>
        </div>
        {this.state.cities.map(({ city, description }) => (
          <CityOutput
          key={city} 
          city={city}
          description={description} />
        ))}
      </div>
    );
  }
}

export default App;
