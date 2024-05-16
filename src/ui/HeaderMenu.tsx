import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export default function HeaderMenu() {
    const navigate = useNavigate();

    return (
        <div className="flex gap-1">
            {/* logo 잘 작동 하는 지 확인 필요 */}
            <li onClick={() => navigate('/')}>Logo</li>
            <li>
                <Button onClick={() => navigate('/login')}>LOGIN</Button>
            </li>
            <li>
                <Button onClick={() => navigate('/singup')}>JOIN</Button>
            </li>
        </div>
    );
}
