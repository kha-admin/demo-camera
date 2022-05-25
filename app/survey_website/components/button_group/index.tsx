import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

export interface IOption {
    value: string;
    text: string;
}

export interface IProps {
    form?: UseFormRegisterReturn;
    options?: Array<IOption>;
    label?: string;
    message?: string;
}

const ButtonGroup: React.FC<IProps> = ({ form, options = [], label, message }) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text" style={{ height: '20px' }}>
                    {label}
                </span>
            </label>

            <div className="btn-group">
                {options.map((item, index) => (
                    <input
                        {...form}
                        key={index}
                        value={item.value}
                        data-title={item.text}
                        type={'radio'}
                        className="btn"
                        style={{ width: `${100 / options.length}%` }}
                    />
                ))}
            </div>

            <label className="label">
                <span className="label-text-alt text-base-300">{message}</span>
            </label>
        </div>
    );
};

export default ButtonGroup;
