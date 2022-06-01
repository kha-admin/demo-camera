import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

export interface IProps {
    form?: Partial<UseFormRegisterReturn>;
    type?: React.HTMLInputTypeAttribute; // input-type
    placeholder?: string;
    maxLength?: number;
    disabled?: boolean;
    ghost?: boolean; // no background
    success?: boolean; // success color
    error?: boolean; // error color
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<IProps> = ({
    form,
    type = 'text',
    placeholder,
    maxLength,
    disabled,
    ghost,
    success,
    error,
    ...props
}) => {
    return (
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
    );
};

export default Input;
