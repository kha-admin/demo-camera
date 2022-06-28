import Link from 'next/link';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';
import { regexEmail } from '@/utils/regex';

export interface IForm {
    username: string;
    email: string;
}

const FormForgotPassword: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>();

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log('onSubmit :', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper
                label={
                    <p>
                        <span className="text-red-500">*</span> Login
                    </p>
                }
                message={errors.username?.message}
            >
                <Input
                    type="text"
                    form={register('username', { required: 'กรุณากรอกชื่อผู้ใช้งาน' })}
                    error={!!errors.username}
                />
            </InputWrapper>

            <InputWrapper
                label={
                    <p>
                        <span className="text-red-500">*</span> Email
                    </p>
                }
                message={errors.email?.message}
            >
                <Input
                    type="email"
                    form={register('email', {
                        required: 'กรุณากรอกอีเมล',
                        pattern: {
                            value: regexEmail,
                            message: 'กรุณากรอกอีเมลให้ถูกต้อง',
                        },
                    })}
                    error={!!errors.email}
                />
            </InputWrapper>

            <button type="submit" className="btn btn-block btn-primary">
                ขอกำหนดรหัสผ่านใหม่
            </button>

            <Link href="/login">
                <button className="btn btn-link text-white">{'< กลับหน้าแรก'}</button>
            </Link>
        </form>
    );
};

export default FormForgotPassword;
