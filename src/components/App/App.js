import React, {Component} from 'react';
import './App.css';
import countries from '../../countriesList';
import CitySearchForm from './CitySearchForm/CitySearchForm';
import CityOutput from './CityOutput/CityOutput';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import AppService from "../../features/services/service.app";

class App extends Component {
    state = {
        country: '',
        error: false,
        cities: [],
        infoMessage: '',
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
                this.setState({serverError: err.toString()})
            })
    }

    getCities = (e) => {
        e.preventDefault();
        this.setState({cities: [], serverError: '', modalError: ''});

        const countryName = e.target.elements.country.value.charAt(0).toUpperCase() + e.target.elements.country.value.slice(1);

        const country = this.state.countries.find(el => el.name === countryName);
        if (!country) {
            this.setState({serverError: 'Wrong country provided...'});
            return;
        }

        const allowedCountries = new RegExp(/spain|germany|poland|france/, 'i');
        if (!allowedCountries.test(countryName)) {
            this.setState({modalError: 'This is demo shit...'});
            return;
        }

        if (!this.state.modalError) {
            AppService.getCitis(country.code)
                .then(response => {
                    const fetchedCities = response.data.results;
                    const fetchedCitiesNames = response.data.results.map(el => el.city);
                    console.log(fetchedCitiesNames, fetchedCities)
                    AppService.getDescriptions(fetchedCitiesNames)
                        .then(result => {
                            console.log(result);
                            const pages = result.data.query.pages;
                                return Object.keys(pages).map(el => {
                                    return pages[el].extract
                                })
                            }
                        )
                        .then(result => {
                            this.setState({
                                cities: fetchedCities.map((city, i) => {
                                        return {
                                            ...city,
                                            description: result[i] ? result[i] : 'No description on Wiki'
                                        }
                                    }
                                )
                            })
                        })
                })
        }
    }

    render() {
        return (
            <div className="App">
                <ErrorMessage error={this.state.infoMessage}/>
                <div className="form-wrapper">
                    <CitySearchForm
                        serverError={this.state.serverError} modalError={this.state.modalError}
                        getCities={this.getCities} getInformation={this.getInformation}
                        countries={countries}
                    />
                </div>
                {this.state.cities.map(({city, description}) => (
                    <CityOutput
                        key={city}
                        city={city}
                        description={description}/>
                ))}
            </div>
        );
    }
}

export default App;
