import React from 'react';
import type {
    UseFormRegisterReturn,
    FieldValues,
    UseFormSetValue,
    UseFormGetValues,
} from 'react-hook-form';

import Select, { type IProps as ISelectProps } from '../select';

import { useSelectDateHook } from './hooks';

// can use only with form
export interface IProps extends Pick<ISelectProps, 'label' | 'message' | 'error'> {
    form: UseFormRegisterReturn; // required
    startYear?: number;
    endYear?: number;
    locale?: 'th' | 'en';
    getValues: UseFormGetValues<FieldValues>; // required
    setValue: UseFormSetValue<FieldValues>; // required
}

const SelectDate: React.FC<IProps> = ({
    form,
    startYear,
    endYear,
    locale = 'en',
    label,
    message,
    error,
    getValues,
    setValue,
}) => {
    const { date, days, months, years, handleDayChange, handleMonthChange, handleYearChange } =
        useSelectDateHook({
            form,
            startYear,
            endYear,
            locale,
            getValues,
            setValue,
        });

    return (
        <div className="grid grid-cols-3 gap-3 align-bottom">
            <Select
                value={date[2]}
                label={label}
                message={message}
                options={days}
                error={error}
                placeholder={locale === 'en' ? 'date' : 'วัน'}
                form={{
                    onChange: handleDayChange,
                    onBlur: form.onBlur,
                    name: form.name,
                }}
            />
            <Select
                value={date[1]}
                options={months}
                error={error}
                placeholder={locale === 'en' ? 'month' : 'เดือน'}
                form={{
                    onChange: handleMonthChange,
                    onBlur: form.onBlur,
                    name: form.name,
                }}
            />
            <Select
                value={date[0]}
                options={years}
                error={error}
                placeholder={locale === 'en' ? 'year' : 'ปี'}
                form={{
                    onChange: handleYearChange,
                    onBlur: form.onBlur,
                    name: form.name,
                }}
            />
        </div>
    );
};

export default SelectDate;
