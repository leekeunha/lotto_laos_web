import { Button, Typography } from '@material-tailwind/react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function HeaderMenu() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const token = queryClient.getQueryData(['token']);
    const isLoggedIn = !!token;

    return (
        <div className="flex">
            {isLoggedIn ? (
                <>
                    <Typography className="mr-2">{'eve.holt@reqres.in'}</Typography>
                    <Button
                        color="blue"
                        size="sm"
                        className="mr-2"
                        onClick={() => {
                            // 로그아웃 로직 수행 (예시)
                            queryClient.removeQueries(['token']);
                            navigate('/login');
                        }}
                    >
                        LOGOUT
                    </Button>
                    <Button size="sm" onClick={() => navigate('/settings')}>
                        SETTINGS
                    </Button>
                </>
            ) : (
                <>
                    <Button size="sm" className="mr-2" onClick={() => navigate('/login')}>
                        LOGIN
                    </Button>
                    <Button color="blue" size="sm" onClick={() => navigate('/join')}>
                        JOIN
                    </Button>
                </>
            )}
        </div>
    );
}
