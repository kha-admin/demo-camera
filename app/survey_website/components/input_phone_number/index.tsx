import React from 'react';

import InputNumber, { IProps as IPropsInputNumber } from '../input_number';

import { isValidThaiPhoneNumber } from '@/utils/phone_number';

export type IProps = Omit<IPropsInputNumber, 'maxLength' | 'error' | 'showCount'>;

const InputPhoneNumber: React.FC<IProps> = ({ value, ...props }) => {
    return (
        <InputNumber
            {...props}
            value={value}
            maxLength={10}
            error={!!value && !isValidThaiPhoneNumber(value)}
            showCount
        />
    );
};

export default InputPhoneNumber;
