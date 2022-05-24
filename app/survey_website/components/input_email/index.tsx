import React from 'react';

import Input, { IProps as IInputProps } from '../input';

import { isValidEmail } from '@/utils/email';

export type IProps = Omit<IInputProps, 'type' | 'error'>;

const InputEmail: React.FC<IProps> = ({ value, ...props }) => {
    return (
        <Input {...props} type={'email'} value={value} error={!!value && !isValidEmail(value)} />
    );
};

export default InputEmail;
