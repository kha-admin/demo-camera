import React from 'react';

export interface IProps {
    label?: string;
    message?: string;
    success?: boolean; // success color
    error?: boolean; // error color
}

const InputWrapper: React.FC<IProps> = ({ children, label, message, success, error }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text" style={{ height: '20px' }}>
                    {label}
                </span>
            </label>

            {children}

            <label className="label">
                <span
                    className={[
                        'label-text-alt text-base-300',
                        success ? 'text-green-500' : '',
                        error ? 'text-red-500' : '',
                    ].join(' ')}
                    style={{ height: '16px' }}
                >
                    {message}
                </span>
            </label>
        </div>
    );
};

export default InputWrapper;
