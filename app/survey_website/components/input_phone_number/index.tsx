import React from 'react';

import Input, { IProps as IInputProps } from '../input';

import { isValidThaiPhoneNumber } from '@/utils/phone_number';

export type IProps = Omit<IInputProps, 'type' | 'maxLength' | 'error' | 'showCount'>;

const InputPhoneNumber: React.FC<IProps> = ({ value, ...props }) => {
    return (
        <Input
            {...props}
            type={'number'}
            value={value}
            maxLength={10}
            error={!!value && !isValidThaiPhoneNumber(value)}
            showCount
        />
    );
};

export default InputPhoneNumber;
