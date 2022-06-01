import React from 'react';
import type {
    FieldValues,
    Path,
    UseFormGetValues,
    UseFormResetField,
    UseFormWatch,
} from 'react-hook-form';

import { useSelectDateHook } from './hooks';

import Select, { type IProps as ISelectProps } from '@/components/select';

export interface IProps<T> extends Pick<ISelectProps, 'control' | 'rules' | 'error'> {
    dayName: Path<T>; // required
    monthName: Path<T>; // required
    yearName: Path<T>; // required
    startYear?: number;
    endYear?: number;
    locale?: 'en' | 'th';
    watch: UseFormWatch<T>; // required
    getValues: UseFormGetValues<T>; // required
    resetField: UseFormResetField<T>; // required
}

// can use only with "react-hook-form"
const SelectDate = <T extends FieldValues>({
    dayName,
    monthName,
    yearName,
    control,
    rules,
    startYear,
    endYear,
    locale = 'en',
    error,
    watch,
    getValues,
    resetField,
}: IProps<T>): React.ReactElement => {
    const { days, months, years } = useSelectDateHook({
        dayName,
        monthName,
        yearName,
        startYear,
        endYear,
        locale,
        watch,
        getValues,
        resetField,
    });

    return (
        <div className="grid grid-cols-3 gap-3 align-bottom">
            <Select
                name={dayName}
                control={control}
                rules={rules}
                options={days}
                error={error}
                placeholder={locale === 'en' ? 'date' : 'วัน'}
            />

            <Select
                name={monthName}
                control={control}
                rules={rules}
                options={months}
                error={error}
                placeholder={locale === 'en' ? 'month' : 'เดือน'}
            />

            <Select
                name={yearName}
                control={control}
                rules={rules}
                options={years}
                error={error}
                placeholder={locale === 'en' ? 'year' : 'ปี'}
            />
        </div>
    );
};

export default SelectDate;
