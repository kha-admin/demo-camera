import React from 'react';

import ButtonGroup, { type IProps as IPropsButtonGroup } from '../button_group';

export type IProps = Omit<IPropsButtonGroup, 'options'>;

const ButtonGroupGender: React.FC<IProps> = ({ ...props }) => {
    return (
        <ButtonGroup
            {...props}
            options={[
                { text: 'เพศชาย', value: 'man' },
                { text: 'เพศหญิง', value: 'woman' },
            ]}
        />
    );
};

export default ButtonGroupGender;
