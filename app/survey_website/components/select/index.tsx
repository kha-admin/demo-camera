import React from 'react';
import { Controller, type Control, type UseControllerProps } from 'react-hook-form';
import ReactSelect, { type Options } from 'react-select';

export interface IOption {
    label: string;
    value: string | number;
}

export type IValue = IOption;

export interface IProps {
    name: string; // required
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any, any>; // required
    rules?: UseControllerProps['rules'];
    options?: Options<IOption>;
    placeholder?: string;
    multiple?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    error?: boolean; // error color
}

// can use only with "react-hook-form"
const Select: React.FC<IProps> = ({
    name,
    control,
    rules,
    options = [],
    placeholder = '',
    multiple = false,
    clearable = false,
    disabled = false,
    error = false,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => {
                return (
                    <ReactSelect
                        {...field}
                        options={options}
                        instanceId={`${name}-select`}
                        placeholder={placeholder}
                        isMulti={multiple}
                        isClearable={clearable}
                        isDisabled={disabled}
                        styles={{
                            control: (base) => ({
                                ...base,
                                height: '48px',
                                borderRadius: '8px',
                                borderColor: error ? 'red !important' : base.borderColor,
                            }),
                        }}
                    />
                );
            }}
        />
    );
};

export default Select;
