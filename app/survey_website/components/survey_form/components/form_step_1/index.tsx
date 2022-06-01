import React from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { type IFormFieldValues } from '../../hooks';

import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';
import { isValidThaiPid } from '@/utils/pid';
import { regexThPhoneNumber } from '@/utils/regex';

export interface IProps {
    errors: FieldErrors<IFormFieldValues>;
    register: UseFormRegister<IFormFieldValues>;
}

const FormStep1: React.FC<IProps> = ({ errors, register }) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            <p>
                กรุณายืนยันตัวตนด้วยเบอร์โทรศัพท์มือถือและเลขประจำตัวประชาชนของท่าน
                ข้อมูลเหล่านี้จะใช้แทนชื่อบัญชีผู้ลงทะเบียนใช้บริการสำหรับการล็อกอินเข้าสู่ระบบข้อมูลของท่านต่อไป
            </p>

            <div className="w-full md:w-1/2">
                <InputWrapper label={'หมายเลขโทรศัพท์มือถือ'} message={'ตัวอย่าง 099-000-1234'}>
                    <Input
                        form={register('phoneNumber', {
                            required: true,
                            pattern: regexThPhoneNumber,
                            minLength: 10,
                            maxLength: 10,
                        })}
                        type={'number'}
                        error={!!errors['phoneNumber']}
                    />
                </InputWrapper>

                <InputWrapper
                    label={'หมายเลขประจำตัวประชาชน'}
                    message={'ตัวอย่าง 3-1111-11111-11-9'}
                >
                    <Input
                        form={register('pid', {
                            required: true,
                            validate: (value) => isValidThaiPid(value),
                            minLength: 13,
                            maxLength: 13,
                        })}
                        type={'number'}
                        error={!!errors['pid']}
                    />
                </InputWrapper>
            </div>
        </div>
    );
};

export default FormStep1;
