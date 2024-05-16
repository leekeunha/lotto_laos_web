import LoginForm from '../features/authentication/LoginForm';

export default function Login() {
    return (
        <main className="min-h-screen grid place-content-center place-items-center gap-8">
            {/* <Logo /> */}
            <div className="text-5xl font-semibold text-center leading-normal">
                Log in to your account
            </div>
            <LoginForm />
        </main>
    );
}
