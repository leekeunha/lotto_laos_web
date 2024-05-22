import ServiceCenterClient from '../httpClient/fakeServiceCenterClient';
import User from '../models/User';
import { UserApiResponse } from './types';

export class ServiceCenterService {
    private apiClient: ServiceCenterClient;

    constructor(apiClient: ServiceCenterClient) {
        this.apiClient = apiClient;
    }

    async search({ keyword }) {
        return this.apiClient
            .search({
                params: {
                    q: keyword,
                },
            })
            .then((res) => {
                // console.log('res.items', res.items);
                return res.items;
            });
    }

    // async join(email: string, password: string): Promise<User> {
    //     try {
    //         const response: UserApiResponse = await this.apiClient.join({
    //             email,
    //             password,
    //         });
    //         const user: User = new User(
    //             response.data.user.id,
    //             response.data.user.email ?? '',
    //             response.data.user.firstName ?? '',
    //             response.data.user.lastName ?? '',
    //         );
    //         return user;
    //     } catch (error) {
    //         throw new Error('');
    //     }
    // }

    // async login(email: string, password: string): Promise<string> {
    //     try {
    //         const response: LoginResponse = await this.apiClient.login({
    //             email,
    //             password,
    //         });

    //         return response.data.token;
    //     } catch (error) {
    //         throw new Error('');
    //     }
    // }

    // async logout() {
    //     try {
    //         return this.apiClient.logout();
    //     } catch (error) {
    //         throw new Error('');
    //     }
    // }
}
