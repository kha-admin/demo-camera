import React, { useState } from 'react';
import type {
    FieldValues,
    SubmitHandler,
    UseFormRegister,
    UseFormHandleSubmit,
    UseFormResetField,
    UseFormGetValues,
    FieldErrors,
    Control,
    UseFormWatch,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { IOption } from '@/components/select';
import { type IProps as IStepsProps } from '@/components/steps';

export interface IFormFieldValues {
    phoneNumber: string; // msisdn
    pid: string;
    gender: string;
    firstName: string;
    lastName: string;
    birthDate: IOption<number | null>;
    birthMonth: IOption<number | null>;
    birthYear: IOption<number | null>;
    email: string;
    preferContactChannel: string;
    maritalStatus: number;
    occupation: number;
    faceImageUploadPath: FileList;
    idCardImageUploadPath: FileList;
    address1: string;
    addressBuilding: string;
    province: IOption<number | null>;
    district: IOption<number | null>;
    subDistrict: IOption<number | null>;
    addressRoom: string;
    addressAlley: string;
    addressStreet: string;
    addressMemo: string;
}

export interface IUseSurveyFormHookResult {
    steps: IStepsProps['steps'];
    current: number;
    errors: FieldErrors<IFormFieldValues>;
    control: Control<IFormFieldValues, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    register: UseFormRegister<IFormFieldValues>;
    watch: UseFormWatch<IFormFieldValues>;
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
        control,
        register,
        watch,
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
        control,
        setCurrent,
        register,
        watch,
        getValues,
        resetField,
        handleSubmit,
        submit,
    };
}

export { useSurveyFormHook };
