import { useState } from 'react';
import { Card, Input, Checkbox, Button, Typography, Spinner } from '@material-tailwind/react';
import { useLogin } from './useLogin';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading } = useLogin();

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            return;
        }
        login(
            { email, password },
            {
                onSettled: () => {
                    setEmail('');
                    setPassword('');
                },
            },
        );
    }

    return (
        <Card className="flex flex-col items-center" color="transparent" shadow={false}>
            <Typography className="text-left" as="div" variant="h4" color="blue-gray">
                Log in
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                    <Input
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                    <Button className="mt-6" disabled={isLoading} fullWidth>
                        {!isLoading ? 'Log in' : <Spinner />}
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default LoginForm;
