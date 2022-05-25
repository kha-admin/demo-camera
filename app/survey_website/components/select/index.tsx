import React from 'react';

export interface IOption {
    value: string | number;
    text: string;
}

export interface IProps {
    value: string; // required
    options?: Array<IOption>;
    label?: string;
    placeholder?: string;
    message?: string;
    disabled?: boolean;
    ghost?: boolean; // no background
    success?: boolean; // success color
    error?: boolean; // error color
    clearable?: boolean;
    clearText?: string;
    noDataText?: string;
    setValue: React.Dispatch<string>; // required
}

const Select: React.FC<IProps> = ({
    value = '',
    options = [],
    label,
    placeholder,
    message,
    disabled,
    ghost,
    success,
    error,
    clearable,
    clearText,
    noDataText,
    setValue,
}) => {
    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setValue(e.target.value);
    };

    const handleClear: React.MouseEventHandler<HTMLSpanElement> = () => {
        setValue('');
    };

    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>

            <select
                value={value}
                disabled={disabled}
                className={[
                    'select w-full max-w-xs',
                    ghost ? 'select-ghost' : 'select-bordered',
                    success ? 'select-success' : '',
                    error ? 'select-error' : '',
                ].join(' ')}
                onChange={handleChange}
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
                {clearable && (
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
