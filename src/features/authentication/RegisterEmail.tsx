import { Button } from '@material-tailwind/react';
import LoginForm from './LoginForm';
import Logo from '../../ui/Logo';
import RegisterEmailForm from './RegisterEmailForm';

export default function RegistEmail() {
    return (
        <main className="min-h-screen flex flex-col gap-8">
            <div className="flex justify-center">
                <Logo className="h-24" />
            </div>
            <RegisterEmailForm />
        </main>
    );
}
