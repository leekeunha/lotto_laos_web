import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export default function HeaderMenu() {
    const navigate = useNavigate();

    return (
        <div className="flex">
            <Button className="mr-2" onClick={() => navigate('/login')}>
                LOGIN
            </Button>
            <Button onClick={() => navigate('/singup')}>JOIN</Button>
        </div>
    );
}
