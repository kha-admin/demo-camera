import React from 'react';
import type {
    FieldErrors,
    UseFormGetValues,
    UseFormRegister,
    UseFormResetField,
} from 'react-hook-form';

import { type IFormFieldValues } from '../../hooks';

import ButtonGroupContact from '@/components/button_group_contact';
import ButtonGroupGender from '@/components/button_group_gender';
import Input from '@/components/input';
import InputFile from '@/components/input_file';
import Select from '@/components/select';
import SelectDate from '@/components/select_date';
import { regexEmail } from '@/utils/regex';

export interface IProps {
    errors: FieldErrors<IFormFieldValues>;
    register: UseFormRegister<IFormFieldValues>;
    getValues: UseFormGetValues<IFormFieldValues>;
    resetField: UseFormResetField<IFormFieldValues>;
}

const FormStep2: React.FC<IProps> = ({ errors, register, getValues, resetField }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* left */}
            <div>
                <ButtonGroupGender
                    form={register('gender', {
                        required: true,
                    })}
                    label={'เพศ'}
                    error={!!errors['gender']}
                />

                <Input
                    form={register('firstName', {
                        required: true,
                    })}
                    label={'ชื่อจริง'}
                    error={!!errors['firstName']}
                />

                <Input
                    form={register('lastName', {
                        required: true,
                    })}
                    label={'นามสกุล'}
                    error={!!errors['lastName']}
                />

                <SelectDate
                    dayForm={register('birthDate', {
                        required: true,
                    })}
                    monthForm={register('birthMonth', {
                        required: true,
                    })}
                    yearForm={register('birthYear', {
                        required: true,
                    })}
                    label={'วันเกิดตามบัตรประชาชน'}
                    locale={'th'}
                    startYear={new Date().getFullYear() - 120}
                    endYear={new Date().getFullYear()}
                    error={!!errors['birthDate'] || !!errors['birthMonth'] || !!errors['birthYear']}
                    getValues={getValues}
                    resetField={resetField}
                />
            </div>

            {/* right */}
            <div>
                <Input
                    form={register('email', {
                        required: true,
                        pattern: regexEmail,
                    })}
                    label={'อีเมล'}
                    message={'ตัวอย่าง demo@kha.co.th'}
                    type={'email'}
                    error={!!errors['email']}
                />

                <ButtonGroupContact
                    form={register('preferContactChannel', {
                        required: true,
                    })}
                    label={'ช่องทางสะดวกให้ติดต่อ'}
                    error={!!errors['preferContactChannel']}
                />

                <Select
                    form={register('maritalStatusId', {
                        required: true,
                    })}
                    options={[]}
                    label={'สถานะ'}
                    error={!!errors['maritalStatusId']}
                />

                <Select
                    form={register('occupationId', {
                        required: true,
                    })}
                    options={[]}
                    label={'อาชีพ'}
                    error={!!errors['occupationId']}
                />
            </div>

            <InputFile
                form={register('faceImageUploadPath', {
                    required: true,
                })}
                label={'ถ่ายรูปหน้า (ไม่สวมหมวก ไม่สวมแว่นดำ)'}
                error={!!errors['faceImageUploadPath']}
            />

            <InputFile
                form={register('idCardImageUploadPath')}
                label={'ถ่ายรูปหน้าบัตรประชาชน'}
                error={!!errors['idCardImageUploadPath']}
            />
        </div>
    );
};

export default FormStep2;
