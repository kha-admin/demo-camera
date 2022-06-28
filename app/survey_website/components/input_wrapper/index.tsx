import React from 'react';

export interface IProps {
    label?: React.ReactNode;
    message?: React.ReactNode;
    success?: boolean; // success color
    error?: boolean; // error color
}

const InputWrapper: React.FC<IProps> = ({ children, label, message, success, error }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text h-[20px]">{label}</span>
            </label>

            {children}

            <label className="label">
                <span
                    className={[
                        'label-text-alt text-base-300 h-[16px]',
                        success ? 'text-green-500' : '',
                        error ? 'text-red-500' : '',
                    ].join(' ')}
                >
                    {message}
                </span>
            </label>
        </div>
    );
};

export default InputWrapper;
