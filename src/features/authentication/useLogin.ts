import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useUserServiceStore } from '../../store/useUserServiceStore';
import { LoginParams } from '../types';
import toast from 'react-hot-toast';

export function useLogin() {
    const { userService } = useUserServiceStore();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: (data: LoginParams) => userService.login(data.email, data.password),
        onSuccess: (token: string) => {
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
