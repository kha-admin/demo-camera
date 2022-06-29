import Link from 'next/link';
import React from 'react';

import { useFormLoginHook } from './hooks';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';

const FormLogin: React.FC = () => {
    const { isHide, errors, register, handleSubmit, onSubmit, toggleHide } = useFormLoginHook();

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
                    <button type="button" className="btn-link text-white" onClick={toggleHide}>
                        {isHide ? 'แสดง?' : 'ซ่อน?'}
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
                    <button type="button" className="btn btn-link text-white">
                        ลืมรหัสผ่าน?
                    </button>
                </Link>
            </div>

            <button type="submit" className="btn btn-block btn-primary">
                เข้าสู่ระบบ
            </button>
        </form>
    );
};

export default FormLogin;
