import { create } from 'zustand';
import { UserService } from '../services/UserService';
import UserClient from '../httpClient/UserClient';

export const useUserService = create(() => {
    const client = new UserClient();
    const userService = new UserService(client);
    return {
        userService,
    };
});
