import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserService } from '../../store/store';

export const useLogout = () => {
    const { userService } = useUserService();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: () => userService.logout(),
        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/home', { replace: true });
        },
    });

    return { logout, isLoading };
};
