import React from 'react';

import ButtonGroup, { IProps as IPropsButtonGroup } from '../button_group';

export type IProps = Omit<IPropsButtonGroup, 'options'>;

const ButtonGroupContact: React.FC<IProps> = ({ ...props }) => {
    return (
        <ButtonGroup
            {...props}
            options={[
                { text: 'โทรศัพท์มือถือ', value: 'phone' },
                { text: 'อีเมล', value: 'email' },
            ]}
        />
    );
};

export default ButtonGroupContact;
