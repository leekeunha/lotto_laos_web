import GoogleMapClient from '../httpClient/GoogleMapClient';

export class GoogleMapService {
    private apiClient: GoogleMapClient;

    constructor(apiClient: GoogleMapClient) {
        this.apiClient = apiClient;
    }

    async getCoordinates(address) {
        console.log('GoogleMapService address:', address);
        return this.apiClient.getCoordinates(address).then((res) => {
            return res.data.results[0].geometry.location;
        });
    }
}
