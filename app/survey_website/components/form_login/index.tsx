import Link from 'next/link';
import React, { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';

export interface IForm {
    username: string;
    password: string;
}

const FormLogin: React.FC = () => {
    const [isHide, setIsHide] = useState<boolean>(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>();

    const onSubmit: SubmitHandler<IForm> = (data) => {
        console.log('onSubmit :', data);
    };

    const toggleHide = (): void => {
        setIsHide((prev) => !prev);
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
                        <span className="text-red-500">*</span> Password
                    </p>
                }
                message={errors.password?.message}
                subMessage={
                    <button className="btn-link text-white" onClick={toggleHide}>
                        แสดง?
                    </button>
                }
            >
                <Input
                    type={isHide ? 'password' : 'text'}
                    form={register('password', { required: 'กรุณากรอกรหัสผ่าน' })}
                    error={!!errors.password}
                />
            </InputWrapper>

            <div className="w-full text-right">
                <Link href="/forgot-password">
                    <button className="btn btn-link text-white">ลืมรหัสผ่าน?</button>
                </Link>
            </div>

            <button type="submit" className="btn btn-block btn-primary">
                เข้าสู่ระบบ
            </button>
        </form>
    );
};

export default FormLogin;
