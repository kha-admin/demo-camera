import Link from 'next/link';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';

export interface IForm {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {
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
                error={!!errors.username}
                message={errors.username?.message}
            >
                <Input
                    form={register('username', { required: 'กรุณากรอกชื่อผู้ใช้งาน' })}
                    error={!!errors.username}
                />
            </InputWrapper>

            <InputWrapper
                label={
                    <p>
                        <span className="text-red-500">*</span> Password
                    </p>
                }
                error={!!errors.password}
                message={errors.password?.message}
            >
                <Input
                    form={register('password', { required: 'กรุณากรอกรหัสผ่าน' })}
                    error={!!errors.password}
                />
            </InputWrapper>

            <div className="w-full text-right">
                <Link href="/forgot-password">
                    <button className="btn btn-link">ลืมรหัสผ่าน?</button>
                </Link>
            </div>

            <button type="submit" className="btn btn-block btn-primary">
                เข้าสู่ระบบ
            </button>
        </form>
    );
};

export default LoginForm;
