import { getDaysInMonth } from 'date-fns';
import { isNumber } from 'lodash-es';
import { useEffect, useState } from 'react';
import { type FieldValues } from 'react-hook-form';

import { type IProps } from '../index';

import { type IOption } from '@/components/select';

export type IUseSelectDateHookParams<T extends FieldValues> = Pick<
    IProps<T>,
    | 'dayName'
    | 'monthName'
    | 'yearName'
    | 'startYear'
    | 'endYear'
    | 'locale'
    | 'watch'
    | 'getValues'
    | 'resetField'
>;

export interface IUseSelectDateHookResult {
    days: IOption[];
    months: IOption[];
    years: IOption[];
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

function useSelectDateHook<T extends FieldValues>(
    params: IUseSelectDateHookParams<T>,
): IUseSelectDateHookResult {
    const {
        dayName,
        monthName,
        yearName,
        startYear,
        endYear,
        locale = 'en',
        watch,
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
        (item): IOption => ({ label: String(item), value: item }),
    );

    const getMonths = (locale: IProps<T>['locale']): Array<string> => {
        switch (locale) {
            case 'en':
                return enMonths;

            case 'th':
                return thMonths;

            default:
                return [];
        }
    };

    const months = getMonths(locale).map((item, index): IOption => ({ label: item, value: index }));

    const years = generateArrayRange(yearRange[0], yearRange[1])
        .sort((a, b) => b - a)
        .map((item): IOption => ({ label: String(item), value: item }));

    const resetDay = (): void => {
        resetField(dayName, { defaultValue: null, keepError: true }); // should reset to null for rendering select
    };

    const updateDayRange = (year: number, month: number): void => {
        const daysInMonth = getDaysInMonth(new Date(year, month));

        setDayRange((prev) => [prev[0], daysInMonth]);
    };

    useEffect(() => {
        const year: IOption | undefined | null = getValues(yearName);
        const month: IOption | undefined | null = getValues(monthName);

        resetDay();
        updateDayRange(
            year && isNumber(year?.value) ? year.value : today.getFullYear(),
            month && isNumber(month?.value) ? month.value : today.getMonth(),
        );
    }, [watch(yearName), watch(monthName)]);

    return {
        days,
        months,
        years,
    };
}

export { useSelectDateHook, enMonths, thMonths };
