import User from '../models/User';

export type UserApiResponse = {
    data: { user: User };
};
