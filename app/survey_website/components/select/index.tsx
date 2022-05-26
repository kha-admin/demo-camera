import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

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

const Select: React.FC<IProps> = ({
    form,
    options = [],
    label,
    placeholder,
    message,
    disabled,
    ghost,
    success,
    error,
    clearText,
    noDataText,
    handleClear,
    ...props
}) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text" style={{ height: '20px' }}>
                    {label}
                </span>
            </label>

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

            <label className="label">
                <span className="label-text-alt text-base-300">{message}</span>
                {!!handleClear && (
                    <span
                        className="label-text-alt text-base-300 underline cursor-pointer"
                        onClick={handleClear}
                    >
                        {clearText || 'Clear'}
                    </span>
                )}
            </label>
        </div>
    );
};

export default Select;
