import React from 'react';
import type {
    Control,
    FieldErrors,
    UseFormGetValues,
    UseFormRegister,
    UseFormResetField,
    UseFormWatch,
} from 'react-hook-form';

import { type IFormFieldValues } from '../../hooks';

import ButtonGroup from '@/components/button_group';
import Input from '@/components/input';
import InputWrapper from '@/components/input_wrapper';
import Select from '@/components/select';
import SelectDate from '@/components/select_date';
import { regexEmail } from '@/utils/regex';

export interface IProps {
    errors: FieldErrors<IFormFieldValues>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<IFormFieldValues, any>;
    register: UseFormRegister<IFormFieldValues>;
    watch: UseFormWatch<IFormFieldValues>;
    getValues: UseFormGetValues<IFormFieldValues>;
    resetField: UseFormResetField<IFormFieldValues>;
}

const FormStep2: React.FC<IProps> = ({
    errors,
    control,
    register,
    watch,
    getValues,
    resetField,
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* left */}
            <div>
                <InputWrapper label={'เพศ'}>
                    <ButtonGroup
                        form={register('gender', {
                            required: true,
                        })}
                        options={[
                            { text: 'เพศชาย', value: 'man' },
                            { text: 'เพศหญิง', value: 'woman' },
                        ]}
                        error={!!errors['gender']}
                    />
                </InputWrapper>

                <InputWrapper label={'ชื่อจริง'}>
                    <Input
                        form={register('firstName', {
                            required: true,
                        })}
                        error={!!errors['firstName']}
                    />
                </InputWrapper>

                <InputWrapper label={'นามสกุล'}>
                    <Input
                        form={register('lastName', {
                            required: true,
                        })}
                        error={!!errors['lastName']}
                    />
                </InputWrapper>

                <InputWrapper label={'วันเกิดตามบัตรประชาชน'}>
                    <SelectDate<IFormFieldValues>
                        dayName={'birthDate'}
                        monthName={'birthMonth'}
                        yearName={'birthYear'}
                        control={control}
                        rules={{ required: true }}
                        locale={'th'}
                        startYear={new Date().getFullYear() - 120}
                        endYear={new Date().getFullYear()}
                        error={
                            !!errors['birthDate'] || !!errors['birthMonth'] || !!errors['birthYear']
                        }
                        watch={watch}
                        getValues={getValues}
                        resetField={resetField}
                    />
                </InputWrapper>
            </div>

            {/* right */}
            <div>
                <InputWrapper label={'อีเมล'} message={'ตัวอย่าง demo@kha.co.th'}>
                    <Input
                        form={register('email', {
                            required: true,
                            pattern: regexEmail,
                        })}
                        type={'email'}
                        error={!!errors['email']}
                    />
                </InputWrapper>

                <InputWrapper label={'ช่องทางสะดวกให้ติดต่อ'}>
                    <ButtonGroup
                        form={register('preferContactChannel', {
                            required: true,
                        })}
                        options={[
                            { text: 'โทรศัพท์มือถือ', value: 'phone' },
                            { text: 'อีเมล', value: 'email' },
                        ]}
                        error={!!errors['preferContactChannel']}
                    />
                </InputWrapper>

                <InputWrapper label={'สถานะ'}>
                    <Select
                        name={'maritalStatusId'}
                        control={control}
                        rules={{ required: true }}
                        options={[]}
                        error={!!errors['maritalStatusId']}
                    />
                </InputWrapper>

                <InputWrapper label={'อาชีพ'}>
                    <Select
                        name={'occupationId'}
                        control={control}
                        rules={{ required: true }}
                        options={[]}
                        error={!!errors['occupationId']}
                    />
                </InputWrapper>
            </div>

            <InputWrapper label={'ถ่ายรูปหน้า (ไม่สวมหมวก ไม่สวมแว่นดำ)'}>
                <Input
                    form={register('faceImageUploadPath', {
                        required: true,
                    })}
                    type={'file'}
                    error={!!errors['faceImageUploadPath']}
                    ghost
                />
            </InputWrapper>

            <InputWrapper label={'ถ่ายรูปหน้าบัตรประชาชน'}>
                <Input
                    form={register('idCardImageUploadPath')}
                    type={'file'}
                    error={!!errors['idCardImageUploadPath']}
                    ghost
                />
            </InputWrapper>
        </div>
    );
};

export default FormStep2;
