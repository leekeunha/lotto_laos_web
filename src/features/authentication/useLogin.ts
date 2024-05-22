import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useUserServiceStore } from '../../store/userServiceStore';
import { LoginParams } from '../types';
import toast from 'react-hot-toast';
import { LoginResponse } from '../../services/types';

export function useLogin() {
    const { userService } = useUserServiceStore();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: (data: LoginParams) => userService.login(data.email, data.password),
        onSuccess: (token: string) => {
            // console.log('token', token);

            queryClient.setQueryData(['token'], token);
            console.log(queryClient.getQueriesData(['token']));
            navigate('/', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR', err);
            toast.error('Provided email or password are incorrect');
        },
    });

    return { login, isLoading };
}
