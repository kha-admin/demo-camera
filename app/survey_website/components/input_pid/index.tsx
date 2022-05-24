import React from 'react';

import InputNumber, { IProps as IPropsInputNumber } from '../input_number';

import { isValidThaiPid } from '@/utils/pid';

export type IProps = Omit<IPropsInputNumber, 'maxLength' | 'error' | 'showCount'>;

const InputPid: React.FC<IProps> = ({ value, ...props }) => {
    return (
        <InputNumber
            {...props}
            value={value}
            maxLength={13}
            error={!!value && !isValidThaiPid(value)}
            showCount
        />
    );
};

export default InputPid;
