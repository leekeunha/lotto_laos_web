import { Typography } from '@material-tailwind/react';
import Logo from '../ui/Logo';
import { NavLink } from 'react-router-dom';
import Register from '../features/authentication/Register';
import RegisterMethodSelector from '../features/authentication/RegisterMethodSelector';

export default function Join() {
    return (
        <main className="flex flex-col items-center gap-8">
            <div className="flex justify-center mt-4">
                <Logo className="h-24" />
            </div>

            <div className="text-center mt-8">
                <Typography variant="h4" className="mb-2">
                    Join membership
                </Typography>
                <Typography variant="paragraph">
                    ID can be used after registration using mobile phone number or email.
                </Typography>
            </div>
            <RegisterMethodSelector></RegisterMethodSelector>
        </main>
    );
}
