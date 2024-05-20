import UserClient from '../httpClient/UserClient';
import User from '../models/User';
import { UserApiResponse } from './types';

export class UserService {
    private apiClient: UserClient;

    constructor(apiClient: UserClient) {
        this.apiClient = apiClient;
    }

    async join(email: string, password: string): Promise<User> {
        try {
            const response: UserApiResponse = await this.apiClient.join({
                email,
                password,
            });
            const user: User = new User(
                response.data.user.id,
                response.data.user.email ?? '',
                response.data.user.firstName ?? '',
                response.data.user.lastName ?? '',
            );
            return user;
        } catch (error) {
            throw new Error('');
        }
    }

    async logout() {
        try {
            return this.apiClient.logout();
        } catch (error) {
            throw new Error('');
        }
    }
}
