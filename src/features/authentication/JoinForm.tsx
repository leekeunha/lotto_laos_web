import React from 'react';
import { useForm } from 'react-hook-form';
import useJoin from './useJoin';
import { Card, Input, Checkbox, Button, Typography, Spinner } from '@material-tailwind/react';
import { JoinParams } from '../types';

export default function JoinForm() {
    const { join, isPending } = useJoin();
    const { register, formState, getValues, handleSubmit, reset } = useForm<JoinParams>();
    const { errors } = formState;

    const onSubmit = ({ email, password }: JoinParams) => {
        console.log('onSubmit');
        join(
            { email, password },
            {
                onSettled: () => reset(),
            },
        );
    };

    return (
        <Card className="flex flex-col items-center" color="transparent" shadow={false}>
            <Typography className="text-left" as="div" variant="h4" color="blue-gray">
                Register with Email Address
            </Typography>
            <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Enter Email address
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        type="email"
                        id="email"
                        disabled={isPending}
                        {...register('email', {
                            required: 'This field is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Please provide a valid email address',
                            },
                        })}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        password
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        type="password"
                        id="password"
                        disabled={isPending}
                        {...register('password', {
                            required: 'This field is required',
                            minLength: {
                                value: 8,
                                message: 'Password needs a minimum of 8 characters',
                            },
                        })}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Confirm Password
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        type="password"
                        id="confirmPassword"
                        disabled={isPending}
                        {...register('confirmPassword', {
                            required: 'This field is required',
                            validate: (value) =>
                                value === getValues().password || 'Passwords need to match',
                        })}
                    />
                    <div className="flex justify-between">
                        <div>
                            <Button type="submit" className="mt-6" disabled={isPending} fullWidth>
                                {!isPending ? 'Back' : <Spinner />}
                            </Button>
                        </div>
                        <div>
                            <Button type="submit" className="mt-6" disabled={isPending} fullWidth>
                                {!isPending ? 'Registration completed' : <Spinner />}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    );
}
