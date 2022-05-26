import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

import InputWrapper from '../input_wrapper';

export interface IOption {
    value: string | number;
    text: string;
}

export interface IProps {
    value?: IOption['value'];
    form?: Partial<UseFormRegisterReturn>;
    options?: Array<IOption>;
    label?: string;
    placeholder?: string;
    message?: string;
    disabled?: boolean;
    ghost?: boolean; // no background
    success?: boolean; // success color
    error?: boolean; // error color
    noDataText?: string;
    clearText?: string;
    handleClear?: React.Dispatch<unknown>;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

// no style
export const PlainSelect: React.FC<
    Omit<IProps, 'label' | 'message' | 'clearText' | 'handleClear'>
> = ({
    form,
    options = [],
    placeholder,
    disabled,
    ghost,
    success,
    error,
    noDataText,
    ...props
}) => {
    return (
        <select
            {...form}
            {...props} // if send "value" prop will bug with "defaultValue" but still need to use "value" prop
            defaultValue={!props.value ? '' : undefined}
            disabled={disabled}
            className={[
                'select w-full',
                ghost ? 'select-ghost' : 'select-bordered',
                success ? 'select-success' : '',
                error ? 'select-error' : '',
            ].join(' ')}
        >
            {options.length === 0 ? (
                <option value={''} disabled>
                    {noDataText || 'No data'}
                </option>
            ) : (
                <option value={''} disabled>
                    {placeholder || 'Pick one'}
                </option>
            )}

            {options.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.text}
                </option>
            ))}
        </select>
    );
};

const Select: React.FC<IProps> = ({ label, message, clearText, handleClear, ...props }) => {
    return (
        <InputWrapper
            label={label}
            message={message}
            clearText={clearText}
            handleClear={handleClear}
        >
            <PlainSelect {...props} />
        </InputWrapper>
    );
};

export default Select;
