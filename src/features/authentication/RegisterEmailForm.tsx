import { useForm } from 'react-hook-form';
import useJoin from './useJoin';
import { Card, Input, Checkbox, Button, Typography, Spinner } from '@material-tailwind/react';
import { JoinParams } from '../types';
import { useMoveBack } from '../../hooks/useMoveBack';
import { NavLink } from 'react-router-dom';

export default function RegisterEmailForm() {
    const { join, isPending } = useJoin();
    const { register, formState, getValues, handleSubmit, reset, watch } = useForm<JoinParams>({
        mode: 'onChange',
    });
    const { errors, isValid } = formState;
    const moveBack = useMoveBack();

    const termsChecked = watch('terms');

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
                        label="email"
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
                        label="password"
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
                        label="confirm password"
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
                            {...register('terms', {
                                required: 'You must accept the terms to proceed.',
                            })}
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
                                disabled={isPending || !isValid || !termsChecked}
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
