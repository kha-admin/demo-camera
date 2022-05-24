import React from 'react';

import Input, { IProps as IInputProps } from '../input';

import { isValidThaiPid } from '@/utils/pid';

export type IProps = Omit<IInputProps, 'type' | 'maxLength' | 'error' | 'showCount'>;

const InputPid: React.FC<IProps> = ({ value, ...props }) => {
    return (
        <Input
            {...props}
            type={'number'}
            value={value}
            maxLength={13}
            error={!!value && !isValidThaiPid(value)}
            showCount
        />
    );
};

export default InputPid;
