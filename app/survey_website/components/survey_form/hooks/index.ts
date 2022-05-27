import React, { useState } from 'react';
import type {
    FieldValues,
    SubmitHandler,
    FormState,
    UseFormRegister,
    UseFormGetValues,
    UseFormSetValue,
    UseFormHandleSubmit,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { type IProps as IStepsProps } from '@/components/steps';

export interface IUseSurveyFormHookResult {
    steps: IStepsProps['steps'];
    current: number;
    formState: FormState<FieldValues>;
    setCurrent: React.Dispatch<React.SetStateAction<number>>;
    register: UseFormRegister<FieldValues>;
    getValues: UseFormGetValues<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    submit: SubmitHandler<FieldValues>;
}

function useSurveyFormHook(): IUseSurveyFormHookResult {
    const steps: IStepsProps['steps'] = [
        { title: 'ยืนยันตัวตน' },
        { title: 'ข้อมูลส่วนตัว' },
        { title: 'ที่อยู่อาศัย' },
    ];

    const { formState, register, getValues, setValue, handleSubmit } = useForm({
        mode: 'all',
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
        formState,
        setCurrent,
        register,
        getValues,
        setValue,
        handleSubmit,
        submit,
    };
}

export { useSurveyFormHook };
