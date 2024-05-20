import { Button } from '@material-tailwind/react';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

export default function Login() {
    return (
        <main className="min-h-screen flex flex-col gap-8">
            <div className="flex justify-center">
                <Logo className="h-24" />
            </div>
            <LoginForm />
        </main>
    );
}
