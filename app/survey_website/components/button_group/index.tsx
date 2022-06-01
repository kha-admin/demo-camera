import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

export interface IOption {
    text: string;
    value: string;
}

export interface IProps {
    form?: Partial<UseFormRegisterReturn>;
    options?: Array<IOption>;
    disabled?: boolean;
    success?: boolean; // success color
    error?: boolean; // error color
    value?: IOption['value'];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const ButtonGroup: React.FC<IProps> = ({
    form,
    options = [],
    disabled,
    success,
    error,
    ...props
}) => {
    return (
        <div className="btn-group">
            {options.map((item, index) => (
                <input
                    {...form}
                    {...props}
                    type={'radio'}
                    key={index}
                    value={item.value}
                    data-title={item.text}
                    disabled={disabled}
                    className={[
                        'btn btn-outline border-base-300',
                        success ? 'btn-success border-green-500' : '',
                        error ? 'btn-error border-red-500' : '',
                    ].join(' ')}
                    style={{ width: `${100 / options.length}%` }}
                />
            ))}
        </div>
    );
};

export default ButtonGroup;
