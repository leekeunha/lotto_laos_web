import React from 'react';
import { useForm } from 'react-hook-form';
import FormRow from '../../ ui/FormRow';

export default function SignupForm() {
    const { signup, isLoading } = useSignup();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    function onSubmit({ fullName, email, password }) {
        signup(
            { fullName, email, password },
            {
                onSettled: () => reset(),
            },
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Full name"></FormRow>
        </form>
    );
}
