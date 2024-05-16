import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup({ fullName });
  }
  return <div></div>;
}
