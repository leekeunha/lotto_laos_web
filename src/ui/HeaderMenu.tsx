import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export default function HeaderMenu() {
    const navigate = useNavigate();

    return (
        <div className="flex">
            <Button size="sm" className="mr-2" onClick={() => navigate('/login')}>
                LOGIN
            </Button>
            <Button size="sm" onClick={() => navigate('/join')}>
                JOIN
            </Button>
        </div>
    );
}
