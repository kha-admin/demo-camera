import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type {
    FormState,
    SubmitHandler,
    UseFormHandleSubmit,
    UseFormRegister,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { forgetAuthInfo, rememberAuthInfo } from '@/utils/auth_storage';

export interface IForm {
    username: string;
    password: string;
}

export interface IUseFormLoginHookParam {
    isHide: boolean;
    errors: FormState<IForm>['errors'];
    register: UseFormRegister<IForm>;
    handleSubmit: UseFormHandleSubmit<IForm>;
    onSubmit: SubmitHandler<IForm>;
    toggleHide: () => void;
}

function useFormLoginHook(): IUseFormLoginHookParam {
    const router = useRouter();

    const [isHide, setIsHide] = useState<boolean>(true);

    const {
        formState: { errors },
        register,
        handleSubmit,
    } = useForm<IForm>();

    const onSubmit: SubmitHandler<IForm> = (data) => {
        // TODO: connect backend here!
        rememberAuthInfo({ accessToken: 'token', username: data.username }); // mock

        router.push('/');
    };

    const toggleHide = (): void => {
        setIsHide((prev) => !prev);
    };

    useEffect(() => {
        forgetAuthInfo();
    }, []);

    return {
        isHide,
        errors,
        register,
        handleSubmit,
        onSubmit,
        toggleHide,
    };
}

export { useFormLoginHook };
