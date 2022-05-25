import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

export interface IProps {
    form?: UseFormRegisterReturn;
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    placeholder?: string;
    message?: string;
    maxLength?: number;
    disabled?: boolean;
    ghost?: boolean; // no background
    success?: boolean; // success color
    error?: boolean; // error color
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
}) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text" style={{ height: '20px' }}>
                    {label}
                </span>
            </label>

            <input
                {...form}
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

            <label className="label">
                <span className="label-text-alt text-base-300">{message}</span>
            </label>
        </div>
    );
};

export default Input;
