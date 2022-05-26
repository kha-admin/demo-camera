import React from 'react';
import type {
    FieldValues,
    FormState,
    UseFormGetValues,
    UseFormRegister,
    UseFormSetValue,
} from 'react-hook-form';

import ButtonGroupContact from '@/components/button_group_contact';
import ButtonGroupGender from '@/components/button_group_gender';
import Input from '@/components/input';
import InputFile from '@/components/input_file';
import Select from '@/components/select';
import SelectDate from '@/components/select_date';

export interface IProps {
    formState: FormState<FieldValues>;
    register: UseFormRegister<FieldValues>;
    getValues: UseFormGetValues<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
}

const FormStep2: React.FC<IProps> = ({ formState, register, getValues, setValue }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* left */}
            <div>
                <ButtonGroupGender
                    form={register('gender', {
                        required: true,
                    })}
                    label={'เพศ'}
                    error={!!formState.errors['gender']}
                />

                <Input
                    form={register('firstName', {
                        required: true,
                    })}
                    label={'ชื่อจริง'}
                    error={!!formState.errors['firstName']}
                />

                <Input
                    form={register('lastName', {
                        required: true,
                    })}
                    label={'นามสกุล'}
                    error={!!formState.errors['lastName']}
                />

                <SelectDate
                    form={register('birthday', {
                        required: true,
                    })}
                    label={'วันเกิดตามบัตรประชาชน'}
                    startYear={new Date().getFullYear() - 120}
                    endYear={new Date().getFullYear()}
                    error={!!formState.errors['birthday']}
                    setValue={setValue}
                    getValues={getValues}
                />

                <InputFile
                    form={register('faceImage', {
                        required: true,
                    })}
                    label={'ถ่ายรูปหน้า (ไม่สวมหมวก ไม่สวมแว่นดำ)'}
                    error={!!formState.errors['faceImage']}
                />
            </div>

            {/* right */}
            <div>
                <Input
                    form={register('email', {
                        required: true,
                    })}
                    label={'อีเมล'}
                    message={'ตัวอย่าง demo@kha.co.th'}
                    type={'email'}
                    error={!!formState.errors['email']}
                />

                <ButtonGroupContact
                    form={register('contact', {
                        required: true,
                    })}
                    label={'ช่องทางสะดวกให้ติดต่อ'}
                    error={!!formState.errors['contact']}
                />

                <Select
                    form={register('status', {
                        required: true,
                    })}
                    options={[]}
                    label={'สถานะ'}
                    error={!!formState.errors['status']}
                />

                <Select
                    form={register('career', {
                        required: true,
                    })}
                    options={[]}
                    label={'อาชีพ'}
                    error={!!formState.errors['career']}
                />

                <InputFile
                    form={register('pidImage', {
                        required: true,
                    })}
                    label={'ถ่ายรูปหน้าบัตรประชาชน'}
                    error={!!formState.errors['pidImage']}
                />
            </div>
        </div>
    );
};

export default FormStep2;
