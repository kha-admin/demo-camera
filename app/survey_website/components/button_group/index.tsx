import React from 'react';

export interface IOption {
    value: string;
    text: string;
}

export interface IProps {
    value: string;
    options: Array<IOption>;
    label?: string;
    setValue: React.Dispatch<string>;
}

const ButtonGroup: React.FC<IProps> = ({ value, options, label, setValue }) => {
    const handleChange = (value: IOption['value']): void => {
        setValue(value);
    };

    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <div className="btn-group">
                {options.map((item, index) => (
                    <input
                        type={'radio'}
                        name={'options'}
                        key={index}
                        checked={value === item.value}
                        data-title={item.text}
                        className="btn"
                        style={{ width: `${100 / options.length}%` }}
                        onChange={() => handleChange(item.value)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ButtonGroup;
