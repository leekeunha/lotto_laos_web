import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserServiceStore } from '../../store/userServiceStore';

export const useLogout = () => {
    const { userService } = useUserServiceStore();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: () => userService.logout(),
        onSuccess: () => {
            queryClient.removeQueries();
            // toast.success('Account has been log out');
            navigate('/home', { replace: true });
        },
    });

    return { logout, isLoading };
};
