import React, { useState } from 'react';
import { useLogin } from './useLogin';
import { Button } from '@material-tailwind/react';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoginForm() {
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
        <Form onSubmit={handleSubmit}>
            <FormRowVertical label="Email address">
                <input
                    type="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical label="Password">
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                />
            </FormRowVertical>
            <FormRowVertical>
                <Button disabled={isLoading}>{!isLoading ? 'Log in' : <CircularProgress />}</Button>
            </FormRowVertical>
        </Form>
    );
}
