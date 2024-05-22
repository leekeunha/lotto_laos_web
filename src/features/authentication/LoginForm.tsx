import { useState } from 'react';
import { Card, Input, Checkbox, Button, Typography, Spinner } from '@material-tailwind/react';
import { useLogin } from './useLogin';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading } = useLogin();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log('handleSubmit');

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
                <div className="flex flex-col gap-2 mb-3">
                    <Input
                        label="email"
                        // size="lg"
                        // placeholder="name@mail.com"
                        // className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        // labelProps={{
                        //     className: 'before:content-none after:content-none',
                        // }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                    <Input
                        label="password"
                        // type="password"
                        // size="lg"
                        // placeholder="********"
                        // className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        // labelProps={{
                        //     className: 'before:content-none after:content-none',
                        // }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                    {/* <div className="flex w-max gap-4"> */}
                    <Checkbox label="remember" color="blue" defaultChecked />
                    {/* </div> */}

                    <Button type="submit" color="blue" className="" disabled={isLoading} fullWidth>
                        {!isLoading ? 'Log in' : <Spinner />}
                    </Button>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-full border-t border-gray-300  mb-3"></div>
                    <Button
                        color="blue"
                        variant="outlined"
                        className=""
                        fullWidth
                        onClick={() => navigate('/join')}
                    >
                        JOIN
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default LoginForm;
