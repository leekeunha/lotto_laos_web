import { create } from 'zustand';
import { UserService } from '../services/UserService';
import UserClient from '../httpClient/FakeUserClient';

export const useUserServiceStore = create(() => {
    const client = new UserClient();
    const userService = new UserService(client);
    return {
        userService,
    };
});
