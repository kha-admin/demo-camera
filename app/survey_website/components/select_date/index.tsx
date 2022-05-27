import React from 'react';
import type { UseFormRegisterReturn, UseFormSetValue, UseFormGetValues } from 'react-hook-form';

import InputWrapper from '../input_wrapper';
import { PlainSelect, type IProps as ISelectProps } from '../select';

import { useSelectDateHook } from './hooks';

// can use only with form
export interface IProps extends Pick<ISelectProps, 'label' | 'message' | 'error'> {
    form: UseFormRegisterReturn; // required
    startYear?: number;
    endYear?: number;
    locale?: 'th' | 'en';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getValues: UseFormGetValues<any>; // required
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue: UseFormSetValue<any>; // required
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
        <InputWrapper label={label} message={message}>
            <div className="grid grid-cols-3 gap-3 align-bottom">
                <PlainSelect
                    value={date[2] || ''}
                    options={days}
                    error={error}
                    placeholder={locale === 'en' ? 'date' : 'วัน'}
                    form={{
                        onChange: handleDayChange,
                        onBlur: form.onBlur,
                        name: form.name,
                    }}
                />

                <PlainSelect
                    value={date[1] || ''}
                    options={months}
                    error={error}
                    placeholder={locale === 'en' ? 'month' : 'เดือน'}
                    form={{
                        onChange: handleMonthChange,
                        onBlur: form.onBlur,
                        name: form.name,
                    }}
                />

                <PlainSelect
                    value={date[0] || ''}
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
        </InputWrapper>
    );
};

export default SelectDate;
