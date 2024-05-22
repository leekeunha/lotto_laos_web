import { Typography } from '@material-tailwind/react';
import Logo from '../ui/Logo';
import { NavLink } from 'react-router-dom';
import Register from '../features/authentication/Register';
import RegisterMethodSelector from '../features/authentication/RegisterMethodSelector';

export default function Join() {
    return (
        <main className="flex flex-col items-center m-40">
            <div className="flex justify-center mt-4">
                <Logo className="h-24" />
            </div>

            <div className="text-center">
                <Typography variant="h4" className="mb-2">
                    Join membership
                </Typography>
                <Typography variant="paragraph">
                    ID can be used after registration using mobile phone number or email.
                </Typography>
            </div>
            <div className="mt-10">
                <RegisterMethodSelector></RegisterMethodSelector>
            </div>
        </main>
    );
}
