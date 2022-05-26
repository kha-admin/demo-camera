import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

import InputWrapper from '../input_wrapper';

export interface IOption {
    value: string;
    text: string;
}

export interface IProps {
    form?: UseFormRegisterReturn;
    options?: Array<IOption>;
    label?: string;
    message?: string;
    disabled?: boolean;
    success?: boolean; // success color
    error?: boolean; // error color
}

const ButtonGroup: React.FC<IProps> = ({
    form,
    options = [],
    label,
    message,
    disabled,
    success,
    error,
}) => {
    return (
        <InputWrapper label={label} message={message}>
            <div className="btn-group">
                {options.map((item, index) => (
                    <input
                        {...form}
                        type={'radio'}
                        key={index}
                        value={item.value}
                        data-title={item.text}
                        disabled={disabled}
                        className={[
                            'btn btn-outline',
                            success ? 'btn-success' : '',
                            error ? 'btn-error' : '',
                        ].join(' ')}
                        style={{ width: `${100 / options.length}%` }}
                    />
                ))}
            </div>
        </InputWrapper>
    );
};

export default ButtonGroup;
