//I had struggled with those 2 API's OpenAq doesn't cover all countries from the world, so that's why i have error message instead of modal when for example 'Afghanistan' is entered - i am taking autofill values from countriesList.js file.
//I had to make 10 requests to Wiki API in order to get correct descriptions for certain cities. Endpoint with titles=A|B|C resulted in response with presorted array - that's why i was unable to put correct descriptions to certain cities (cities where exctract wasn't provided were sorted to the very end of array)
//Design in minimal - i spent too much time on trying to make logic best i could
//Readme.md will be updated tommorow (1 day after deadline, because i have to go to work right now).

import React, { Component } from 'react';
import './App.css';
import countries from '../countriesList';
import CitySearchForm from '../components/CitySearchForm/CitySearchForm';
import FancyBackground from '../components/FancyBackground/FancyBackground';
import Modal from '../components/Modal/Modal';
import CityOutput from '../components/CityOutput/CityOutput';
import Backdrop from '../components/Backdrop/Backdrop';
import Header from '../components/Header/Header';
import AppService from "../features/services/service.app";


class App extends Component {
    state = {
        country: '',
        error: false,
        cities: [],
        modalError: '',
        serverError: '',
        countries: []
    }

    componentDidMount() {
        AppService.getCountry()
            .then(response => {
                this.setState({
                    countries: response.data.results
                })
            })
            .catch(err => {
                this.setState({ serverError: err.toString() })
            })
    }

    getCities = (text) => {
        this.setState({ cities: [], serverError: '', modalError: '' });

        const countryName = text.charAt(0).toUpperCase() + text.slice(1);

        const country = this.state.countries.find(el => el.name === countryName);
        if (!country || !text) {
            this.setState({ serverError: 'Wrong country provided...' });
            return;
        }

        const allowedCountries = new RegExp(/spain|germany|poland|france/, 'i');
        if (!allowedCountries.test(countryName)) {
            this.setState({ modalError: 'This is demo version of our app. It only works for: Spain, Poland, Germany and France. Feel free to check most polluted cities in those countries' });
            return;
        }

        if (!this.state.modalError) {
            AppService.getCities(country.code)
                .then(response => {
                    const fetchedCities = response.data.results;
                    const callsToWiki = fetchedCities.map(el => {
                        return AppService.getDescriptions(el.city)
                            .then(result => result.data.query.pages[Object.keys(result.data.query.pages)[0]].extract)
                    })

                    Promise.all(callsToWiki).then(result => {
                        this.setState({
                            cities: fetchedCities.map((el, i) => {
                                return {
                                    ...el,
                                    description: result[i] ? result[i] : 'No description on Wiki'
                                }
                            }
                            )
                        })
                    })
                })
        }
    }

    modalCloseHandler = () => {
        this.setState({ modalError: '' })
    }

    render() {
        const { serverError, modalError, cities } = this.state;
        return (
            <div className="App">
                {modalError && <Modal modalText={modalError} click={this.modalCloseHandler} />}
                {modalError && <Backdrop click={this.modalCloseHandler} />}
                <FancyBackground>
                    <Header />
                    <h2>Pollution search</h2>
                    <span><p>Type in country name and click 'Get cities' to check 10 most polluted cities in it</p></span>
                </FancyBackground>
                <div className="form-wrapper">
                    <CitySearchForm
                        serverError={serverError}
                        getCities={this.getCities} getInformation={this.getInformation}
                        countries={countries}
                    />
                </div>
                {cities.length > 0 &&
                    <div className="output-wrapper">
                        <h2>Results</h2>
                        {cities.map(({ city, description }) => (
                            <CityOutput
                                key={city}
                                city={city}
                                description={description} />
                        ))}
                    </div>
                }
            </div>
        );
    }
}

export default App;
