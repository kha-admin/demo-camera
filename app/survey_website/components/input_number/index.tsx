import React from 'react';

export interface IProps {
    value?: string;
    label?: string;
    placeholder?: string;
    message?: string;
    maxLength?: number;
    error?: boolean; // error color
    showCount?: boolean;
    setValue?: React.Dispatch<string>;
}

const InputNumber: React.FC<IProps> = ({
    value = '',
    label,
    placeholder,
    message,
    maxLength,
    error,
    showCount,
    setValue,
}) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if ((!!maxLength && e.target.value.length > maxLength) || !setValue) {
            return false;
        }

        setValue(e.target.value);
    };

    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>

            <input
                type="number"
                value={value}
                placeholder={placeholder}
                className={`input input-bordered w-full max-w-xs ${
                    error ? 'input-error' : undefined
                }`}
                onChange={handleChange}
            />

            <label className="label">
                <span className="label-text-alt text-base-300">{message}</span>
                {showCount && (
                    <span className="label-text-alt text-base-300">{`${value.length} ${
                        maxLength ? `/ ${maxLength}` : ''
                    }`}</span>
                )}
            </label>
        </div>
    );
};

export default InputNumber;
