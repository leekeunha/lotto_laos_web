import axios from 'axios';
import { USER_API_CLIENT_URL } from '../utils/constants';
export default class FakeUserClient {
    private httpClient;

    constructor() {
        this.httpClient = axios.create({
            //TODO : env 파일
            baseURL: 'https://reqres.in/api',
        });
    }

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
