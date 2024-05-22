import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useUserServiceStore } from '../../store/userServiceStore';
import { JoinParams } from '../types';

export default function useJoin() {
    const { userService } = useUserServiceStore();

    const { mutate: join, isPending } = useMutation({
        mutationFn: (data: JoinParams) => userService.join(data.email, data.password),
        onSuccess: (user) => {
            toast.success(
                "Account successfully created! Please verify the new account from the user's email address.",
            );
        },
        onError: (error: Error) => {
            toast.error(`Login failed: ${error.message}`);
        },
    });

    return { join, isPending };
}
