import React from 'react';
import type { UseFormGetValues, UseFormRegisterReturn, UseFormResetField } from 'react-hook-form';

import InputWrapper from '../input_wrapper';

import { useSelectDateHook } from './hooks';

import { PlainSelect, type IProps as ISelectProps } from '@/components/select';

// only use with react-hook-form
export interface IProps extends Pick<ISelectProps, 'label' | 'message' | 'error'> {
    dayForm: UseFormRegisterReturn; // required
    monthForm: UseFormRegisterReturn; // required
    yearForm: UseFormRegisterReturn; // required
    startYear?: number;
    endYear?: number;
    locale?: 'en' | 'th';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getValues: UseFormGetValues<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resetField: UseFormResetField<any>;
}

const SelectDate: React.FC<IProps> = ({
    dayForm,
    monthForm,
    yearForm,
    startYear,
    endYear,
    locale = 'en',
    label,
    message,
    error,
    getValues,
    resetField,
}) => {
    const { days, months, years, handleMonthChange, handleYearChange } = useSelectDateHook({
        dayForm,
        monthForm,
        yearForm,
        startYear,
        endYear,
        locale,
        getValues,
        resetField,
    });

    return (
        <InputWrapper label={label} message={message}>
            <div className="grid grid-cols-3 gap-3 align-bottom">
                <PlainSelect
                    form={dayForm}
                    options={days}
                    error={error}
                    placeholder={locale === 'en' ? 'date' : 'วัน'}
                />

                <PlainSelect
                    form={{
                        ...monthForm,
                        onChange: handleMonthChange,
                    }}
                    options={months}
                    error={error}
                    placeholder={locale === 'en' ? 'month' : 'เดือน'}
                />

                <PlainSelect
                    form={{
                        ...yearForm,
                        onChange: handleYearChange,
                    }}
                    options={years}
                    error={error}
                    placeholder={locale === 'en' ? 'year' : 'ปี'}
                />
            </div>
        </InputWrapper>
    );
};

export default SelectDate;
