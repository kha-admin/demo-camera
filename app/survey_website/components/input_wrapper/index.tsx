import React from 'react';

export interface IProps {
    label?: string;
    message?: string;
    clearText?: string;
    handleClear?: React.Dispatch<unknown>;
}

const InputWrapper: React.FC<IProps> = ({ children, label, message, clearText, handleClear }) => {
    return (
        <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text" style={{ height: '20px' }}>
                        {label}
                    </span>
                </label>

                {children}

                <label className="label">
                    <span className="label-text-alt text-base-300" style={{ height: '16px' }}>
                        {message}
                    </span>

                    {!!handleClear && (
                        <span
                            className="label-text-alt text-base-300 underline cursor-pointer"
                            style={{ height: '16px' }}
                            onClick={handleClear}
                        >
                            {clearText || 'Clear'}
                        </span>
                    )}
                </label>
            </div>
        </div>
    );
};

export default InputWrapper;
