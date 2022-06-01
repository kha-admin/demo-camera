import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

export interface IProps {
    form?: Partial<UseFormRegisterReturn>;
    type?: React.HTMLInputTypeAttribute; // input-type
    accept?: React.InputHTMLAttributes<HTMLInputElement>['accept'];
    capture?: React.InputHTMLAttributes<HTMLInputElement>['capture'];
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
    accept,
    capture,
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
            accept={accept}
            capture={capture}
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
