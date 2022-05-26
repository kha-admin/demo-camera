import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

import InputWrapper from '../input_wrapper';

export interface IProps {
    value?: string;
    form?: Partial<UseFormRegisterReturn>;
    label?: string;
    placeholder?: string;
    message?: string;
    maxLength?: number;
    disabled?: boolean;
    ghost?: boolean; // no background
    success?: boolean; // success color
    error?: boolean; // error color
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea: React.FC<IProps> = ({
    form,
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
            ></textarea>
        </InputWrapper>
    );
};

export default Textarea;
