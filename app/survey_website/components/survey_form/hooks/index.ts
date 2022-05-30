import React, { useState } from 'react';
import type {
    FieldValues,
    SubmitHandler,
    UseFormRegister,
    UseFormHandleSubmit,
    UseFormResetField,
    UseFormGetValues,
    FieldErrors,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { type IProps as IStepsProps } from '@/components/steps';

export interface IFormFieldValues {
    phoneNumber: string; // msisdn
    pid: string;
    gender: string;
    firstName: string;
    lastName: string;
    birthDate: number;
    birthMonth: number;
    birthYear: number;
    email: string;
    preferContactChannel: string;
    maritalStatusId: number;
    occupationId: number;
    faceImageUploadPath: string;
    idCardImageUploadPath: string;
    address1: string;
    addressBuilding: string;
    provinceId: number;
    districtId: number;
    subDistrictId: number;
    addressRoom: string;
    addressAlley: string;
    addressStreet: string;
    addressMemo: string;
}

export interface IUseSurveyFormHookResult {
    steps: IStepsProps['steps'];
    current: number;
    errors: FieldErrors<IFormFieldValues>;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    register: UseFormRegister<IFormFieldValues>;
    getValues: UseFormGetValues<IFormFieldValues>;
    resetField: UseFormResetField<IFormFieldValues>;
    handleSubmit: UseFormHandleSubmit<IFormFieldValues>;
    submit: SubmitHandler<IFormFieldValues>;
}

function useSurveyFormHook(): IUseSurveyFormHookResult {
    const steps: IStepsProps['steps'] = [
        { title: 'ยืนยันตัวตน' },
        { title: 'ข้อมูลส่วนตัว' },
        { title: 'ที่อยู่อาศัย' },
    ];

    const {
        formState: { errors },
        register,
        getValues,
        resetField,
        handleSubmit,
    } = useForm<IFormFieldValues>({
        mode: 'onChange',
    });

    const [current, setCurrent] = useState<number>(0);

    const submit: SubmitHandler<FieldValues> = (): void => {
        if (current + 1 === steps.length) {
            console.log('submit');
        }

        setCurrent((prev) => (prev += 1));
    };

    return {
        steps,
        current,
        errors,
        setCurrent,
        register,
        getValues,
        resetField,
        handleSubmit,
        submit,
    };
}

export { useSurveyFormHook };
