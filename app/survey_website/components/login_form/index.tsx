import React from 'react';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';

const LoginForm: React.FC = () => {
    return (
        <form>
            <InputWrapper
                label={
                    <p>
                        <span className="text-red-500">*</span> Login
                    </p>
                }
            >
                <Input />
            </InputWrapper>

            <InputWrapper
                label={
                    <p>
                        <span className="text-red-500">*</span> Password
                    </p>
                }
            >
                <Input />
            </InputWrapper>

            <div className="w-full text-right">
                <button className="btn btn-link">ลืมรหัสผ่าน?</button>
            </div>

            <button className="btn btn-block btn-primary">เข้าสู่ระบบ</button>
        </form>
    );
};

export default LoginForm;
