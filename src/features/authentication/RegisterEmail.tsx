import Logo from '../../ui/Logo';
import RegisterEmailForm from './RegisterEmailForm';

export default function RegisterEmail() {
    return (
        <main className="min-h-screen flex flex-col gap-8">
            <div className="flex justify-center">
                <Logo className="h-24" />
            </div>
            <RegisterEmailForm />
        </main>
    );
}
