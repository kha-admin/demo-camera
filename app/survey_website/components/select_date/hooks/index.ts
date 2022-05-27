import { getDaysInMonth } from 'date-fns';
import { isDate, isNumber } from 'lodash-es';
import { useEffect, useState } from 'react';
import { type ChangeHandler } from 'react-hook-form';

import { type IProps } from '../index';

import { type IOption } from '@/components/select';

export type IUseSelectDateHookParams = Pick<
    IProps,
    'form' | 'startYear' | 'endYear' | 'locale' | 'getValues' | 'setValue'
>;

export interface IUseSelectDateHookResult {
    date: [number?, number?, number?]; // [year, day, month]
    days: IOption[];
    months: IOption[];
    years: IOption[];
    handleDayChange: ChangeHandler;
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
    const { form, startYear, endYear, locale = 'en', getValues, setValue } = params;

    const today = new Date();

    const [date, setDate] = useState<IUseSelectDateHookResult['date']>([]); // [year, day, month]

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

    const getDays = (year: number, month: number /*0-11*/): number => {
        return getDaysInMonth(new Date(year, month));
    };

    const handleDayChange: ChangeHandler = async (e) => {
        setDate((prev) => [prev[0], prev[1], parseInt(e.target.value, 10)]);

        return form.onChange(e);
    };

    const handleMonthChange: ChangeHandler = async (e) => {
        setDate((prev) => [prev[0], parseInt(e.target.value, 10), undefined]);

        return form.onChange(e);
    };

    const handleYearChange: ChangeHandler = async (e) => {
        setDate((prev) => [parseInt(e.target.value, 10), prev[1], undefined]);

        return form.onChange(e);
    };

    const handleMounted = (): void => {
        const value = getValues(form.name);

        if (!isDate(value)) {
            return;
        }

        setDate([
            value.getFullYear(),
            value.getMonth(), // 0-11
            value.getDate(),
        ]);
    };

    useEffect(() => {
        handleMounted();
    }, []);

    useEffect(() => {
        const year = date[0];
        const month = date[1];
        const day = date[2];

        if (!isNumber(year) || !isNumber(month) || !isNumber(day)) {
            setValue(form.name, undefined);

            return;
        }

        setValue(form.name, new Date(year, month, day));
    }, [date]);

    useEffect(() => {
        const year = date[0];
        const month = date[1];

        if (!isNumber(year) || !isNumber(month)) {
            return;
        }

        setDayRange((prev) => [prev[0], getDays(year, month)]);
    }, [date[0], date[1]]);

    return {
        date,
        days,
        months,
        years,
        handleDayChange,
        handleMonthChange,
        handleYearChange,
    };
}

export { useSelectDateHook, enMonths, thMonths };
