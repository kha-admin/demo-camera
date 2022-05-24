import React from 'react';

export interface IOption {
    value: string;
    text: string;
}

export interface IProps {
    value: string;
    options: Array<IOption>;
    setValue: React.Dispatch<string>;
}

const ButtonGroup: React.FC<IProps> = ({ value, options, setValue }) => {
    const handleChange = (value: IOption['value']): void => {
        setValue(value);
    };

    return (
        <div className="btn-group">
            {options.map((item, index) => (
                <input
                    type={'radio'}
                    name={'options'}
                    key={index}
                    checked={value === item.value}
                    data-title={item.text}
                    className="btn"
                    onChange={() => handleChange(item.value)}
                />
            ))}
        </div>
    );
};

export default ButtonGroup;
