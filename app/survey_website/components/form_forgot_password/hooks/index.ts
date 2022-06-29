import { useEffect } from 'react';
import type {
    SubmitHandler,
    FormState,
    UseFormRegister,
    UseFormHandleSubmit,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { forgetAuthInfo } from '@/utils/auth_storage';

export interface IForm {
    username: string;
    email: string;
}

export interface IUseFormForgotPasswordHookParam {
    errors: FormState<IForm>['errors'];
    register: UseFormRegister<IForm>;
    handleSubmit: UseFormHandleSubmit<IForm>;
    onSubmit: SubmitHandler<IForm>;
}

function useFormForgotPasswordHook(): IUseFormForgotPasswordHookParam {
    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm<IForm>();

    const onSubmit: SubmitHandler<IForm> = (_data) => {
        alert('Not available now.');
    };

    useEffect(() => {
        forgetAuthInfo();
    }, []);

    return {
        errors,
        register,
        handleSubmit,
        onSubmit,
    };
}

export { useFormForgotPasswordHook };
