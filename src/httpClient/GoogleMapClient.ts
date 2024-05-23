import axios from 'axios';
import { GOOGLE_MAPS_API_KEY } from '../utils/constants';

export default class GoogleMapClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: `https://maps.googleapis.com/maps/api/geocode/json`,
            params: { key: GOOGLE_MAPS_API_KEY },
        });
    }

    async getCoordinates(address) {
        console.log('GoogleMapClient address: ', address);
        return this.httpClient.get('', { params: { address } });
    }
}
