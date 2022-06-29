import Link from 'next/link';
import React from 'react';

import { useFormForgotPasswordHook } from './hooks';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';
import { regexEmail } from '@/utils/regex';

const FormForgotPassword: React.FC = () => {
    const { errors, register, handleSubmit, onSubmit } = useFormForgotPasswordHook();

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
                <button type="button" className="btn btn-link text-white">
                    {'< กลับหน้าแรก'}
                </button>
            </Link>
        </form>
    );
};

export default FormForgotPassword;
