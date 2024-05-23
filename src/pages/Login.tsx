import { Button } from '@material-tailwind/react';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

export default function Login() {
    return (
        <main className="flex flex-col items-center m-40">
            <div className="flex justify-center mt-4">
                <Logo className="h-24" />
            </div>

            <LoginForm />
        </main>
    );
}
