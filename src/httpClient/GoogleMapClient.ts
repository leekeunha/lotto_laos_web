import axios from 'axios';
import { GOOGLE_MAPS_API_KEY } from '../utils/constants';

export default class GoogleMapClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: `https://maps.googleapis.com/maps/api/geocode/json`,
            params: { key: 'AIzaSyAcP2PHO1tdFQ4LfL99B92C7q7KCE6GA_s' },
        });
    }

    async getCoordinates(address) {
        console.log('GoogleMapClient address: ', address);
        return this.httpClient.get('', { params: { address } });
    }
}
