import React from 'react';

import InputText, { IProps as IPropsInputEmail } from '../input_text';

import { isValidEmail } from '@/utils/email';

export type IProps = Omit<IPropsInputEmail, 'type' | 'error'>;

const InputEmail: React.FC<IProps> = ({ value, ...props }) => {
    return (
        <InputText
            {...props}
            type={'email'}
            value={value}
            error={!!value && !isValidEmail(value)}
        />
    );
};

export default InputEmail;
