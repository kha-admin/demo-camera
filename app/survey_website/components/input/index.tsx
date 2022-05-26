import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

import InputWrapper from '../input_wrapper';

export interface IProps {
    value?: string;
    form?: Partial<UseFormRegisterReturn>;
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    placeholder?: string;
    message?: string;
    maxLength?: number;
    disabled?: boolean;
    ghost?: boolean; // no background
    success?: boolean; // success color
    error?: boolean; // error color
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<IProps> = ({
    form,
    type = 'text',
    label,
    placeholder,
    message,
    maxLength,
    disabled,
    ghost,
    success,
    error,
    ...props
}) => {
    return (
        <InputWrapper label={label} message={message}>
            <input
                {...form}
                {...props}
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                disabled={disabled}
                className={[
                    'input w-full',
                    ghost ? 'input-ghost' : 'input-bordered',
                    success ? 'input-success' : '',
                    error ? 'input-error' : '',
                ].join(' ')}
            />
        </InputWrapper>
    );
};

export default Input;
