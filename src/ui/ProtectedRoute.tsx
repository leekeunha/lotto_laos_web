import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../features/authentication/useUser';

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser();

    useEffect(
        function () {
            // 로그인 기능 완성될 때 까지 주석
            // if (!isAuthenticated && !isLoading) {
            //     navigate('/login');
            // }
        },
        [isAuthenticated, isLoading, navigate],
    );

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    if (isAuthenticated) {
        return children;
    }
}
