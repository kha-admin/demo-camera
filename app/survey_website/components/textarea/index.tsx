import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

export interface IProps {
    form?: Partial<UseFormRegisterReturn>;
    placeholder?: string;
    maxLength?: number;
    disabled?: boolean;
    ghost?: boolean; // no background
    success?: boolean; // success color
    error?: boolean; // error color
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea: React.FC<IProps> = ({
    form,
    placeholder,
    maxLength,
    disabled,
    ghost,
    success,
    error,
    ...props
}) => {
    return (
        <textarea
            {...form}
            {...props}
            placeholder={placeholder}
            maxLength={maxLength}
            disabled={disabled}
            className={[
                'textarea w-full h-24',
                ghost ? 'textarea-ghost' : 'textarea-bordered',
                success ? 'textarea-success' : '',
                error ? 'textarea-error' : '',
            ].join(' ')}
        />
    );
};

export default Textarea;
