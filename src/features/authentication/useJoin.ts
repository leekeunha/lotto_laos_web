import { join as joinApi } from './../../services/api/auth';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

export default function useJoin() {
    const { mutate: join, isLoading } = useMutation({
        mutationFn: joinApi,
        onSuccess: (user) => {
            toast.success(
                "Account successfully created! Please verufy the new account from the user's email address.",
            );
        },
    });
    return { join, isLoading };
}
