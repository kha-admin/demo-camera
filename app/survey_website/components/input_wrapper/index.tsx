import React from 'react';

export interface IProps {
    label?: React.ReactNode;
    message?: React.ReactNode;
    subMessage?: React.ReactNode;
}

const InputWrapper: React.FC<IProps> = ({ children, label, message, subMessage }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text h-[20px]">{label}</span>
            </label>

            {children}

            <label className="label">
                <span className={'label-text-alt text-base-300 h-[16px]'}>{message}</span>
                <span className={'label-text-alt text-base-300 h-[16px]'}>{subMessage}</span>
            </label>
        </div>
    );
};

export default InputWrapper;
