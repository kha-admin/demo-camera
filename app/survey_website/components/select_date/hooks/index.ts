import { getDaysInMonth } from 'date-fns';
import { useState } from 'react';
import { type ChangeHandler } from 'react-hook-form';

import { type IProps } from '../index';

import { type IOption } from '@/components/select';

export type IUseSelectDateHookParams = Pick<
    IProps,
    | 'dayForm'
    | 'monthForm'
    | 'yearForm'
    | 'startYear'
    | 'endYear'
    | 'locale'
    | 'getValues'
    | 'resetField'
>;

export interface IUseSelectDateHookResult {
    days: IOption[];
    months: IOption[];
    years: IOption[];
    handleMonthChange: ChangeHandler;
    handleYearChange: ChangeHandler;
}

const enMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const thMonths = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
];

function useSelectDateHook(params: IUseSelectDateHookParams): IUseSelectDateHookResult {
    const {
        dayForm,
        monthForm,
        yearForm,
        startYear,
        endYear,
        locale = 'en',
        getValues,
        resetField,
    } = params;

    const today = new Date();

    const [dayRange, setDayRange] = useState<[number, number]>([1, 31]); // [start, end]

    const yearRange: [number, number] = [
        startYear || today.getFullYear() - 100,
        endYear || today.getFullYear() + 10,
    ]; // [start, end]

    const generateArrayRange = (start: number, end: number): Array<number> => {
        // start should be less than end
        if (start > end) {
            return [];
        }

        const value: Array<number> = [start];

        while (start < end) {
            value.push((start += 1));
        }

        return value;
    };

    const days = generateArrayRange(dayRange[0], dayRange[1]).map(
        (item): IOption => ({ text: String(item), value: item }),
    );

    const getMonths = (locale: IProps['locale']): Array<string> => {
        switch (locale) {
            case 'en':
                return enMonths;

            case 'th':
                return thMonths;

            default:
                return [];
        }
    };

    const months = getMonths(locale).map((item, index): IOption => ({ text: item, value: index }));

    const years = generateArrayRange(yearRange[0], yearRange[1])
        .sort((a, b) => b - a)
        .map((item): IOption => ({ text: String(item), value: item }));

    const resetDay = (): void => {
        resetField(dayForm.name, { keepError: true });
    };

    const handleMonthChange: ChangeHandler = async (e) => {
        if (!e.target.value) {
            return monthForm.onChange(e);
        }

        resetDay();

        const daysInMonth = getDaysInMonth(
            new Date(getValues(yearForm.name) || today.getFullYear(), e.target.value),
        );

        setDayRange((prev) => [prev[0], daysInMonth]);

        return monthForm.onChange(e);
    };

    const handleYearChange: ChangeHandler = async (e) => {
        if (!e.target.value) {
            return yearForm.onChange(e);
        }

        resetDay();

        const daysInMonth = getDaysInMonth(
            new Date(e.target.value, getValues(monthForm.name) || today.getMonth()),
        );

        setDayRange((prev) => [prev[0], daysInMonth]);

        return yearForm.onChange(e);
    };

    return {
        days,
        months,
        years,
        handleMonthChange,
        handleYearChange,
    };
}

export { useSelectDateHook, enMonths, thMonths };
