import React from 'react';
import { useForm } from 'react-hook-form';
import useJoin from './useJoin';
import { Card, Input, Checkbox, Button, Typography, Spinner } from '@material-tailwind/react';
import { JoinParams } from '../types';
import { useMoveBack } from '../../hooks/useMoveBack';
import { NavLink } from 'react-router-dom';

export default function RegisterMobileForm() {
    const { join, isPending } = useJoin();
    const { register, formState, getValues, handleSubmit, reset } = useForm<JoinParams>({
        mode: 'onChange',
    });
    const { errors, isValid } = formState;
    const moveBack = useMoveBack();

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
                Enter mobile phone number
            </Typography>
            <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Enter mobile phone number
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="010-1234-5678"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        type="tel"
                        id="mobile"
                        disabled={isPending}
                        {...register('mobile', {
                            required: 'This field is required',
                            pattern: {
                                value: /^01([0|1|6|7|8|9])-(\d{3,4})-(\d{4})$/,
                                message: 'Please provide a valid mobile phone number',
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
                    <div className="flex justify-between items-center">
                        <Checkbox
                            labelProps={{ className: 'text-xs' }}
                            label="(Required) Consent to Happy 5/45 Terms of Use"
                        />
                        <NavLink
                            to="/service-center/terms-of-service"
                            className="bg-teal-500 text-white border border-white p-1 rounded inline-block text-xs"
                        >
                            more
                        </NavLink>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <Button
                                type="submit"
                                className=""
                                disabled={isPending}
                                onClick={moveBack}
                                fullWidth
                            >
                                {!isPending ? 'Back' : <Spinner />}
                            </Button>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                className=""
                                disabled={isPending || !isValid}
                                fullWidth
                            >
                                {!isPending ? 'Registration completed' : <Spinner />}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Card>
    );
}
