import axios from 'axios';
import { USER_API_CLIENT_URL } from '../constants';

export default class UserClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://reqres.in/api',
        });
    }
    // private api_url = constants.USER_API_CLIENT_URL;

    // private api_url = process.env.USER_API_CLIENT_URL;

    async join(params) {
        return this.httpClient.post('join', params);
    }

    async login(params) {
        return this.httpClient.post('login', params);
    }

    async logout() {
        return this.httpClient.post('logout');
    }
}
