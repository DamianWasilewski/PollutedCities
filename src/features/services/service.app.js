import axios from 'axios';

class AppService {
    getCountry() {
        return axios.get('https://api.openaq.org/v1/countries')
    }

    getCitis(code) {
        return axios.get(`https://api.openaq.org/v1/cities?country=${code}&order_by=count&sort=desc&limit=10`)
    }

    getDescriptions(descriptions) {
        return axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&category=city&redirects&origin=*&titles=${descriptions.join("|")}`)
    }
}

const Service = new AppService();

export default Service;