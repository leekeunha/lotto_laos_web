import { logout as logoutApi } from './services/api/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/login', { replace: true });
    },
  });

  return { logout, isLoading };
};
