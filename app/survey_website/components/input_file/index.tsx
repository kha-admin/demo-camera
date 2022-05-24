import React from 'react';

import Input, { IProps as IInputProps } from '../input';

export type IProps = Omit<IInputProps, 'type' | 'ghost'>;

const InputFile: React.FC<IProps> = ({ ...props }) => {
    return <Input {...props} type={'file'} ghost />;
};

export default InputFile;
