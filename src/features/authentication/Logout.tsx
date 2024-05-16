import { useLogout } from './useLogout';
import { Button, Spinner } from '@material-tailwind/react';

export default function Logout() {
    const { logout, isLoading } = useLogout();

    return (
        <Button disabled={isLoading} onClick={logout}>
            {!isLoading ? 'LOGOUT' : <Spinner />}
        </Button>
    );
}
