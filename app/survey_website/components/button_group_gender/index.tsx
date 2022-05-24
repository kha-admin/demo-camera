import React from 'react';

import ButtonGroup, { IProps as IPropsButtonGroup } from '../button_group';

export type IProps = Omit<IPropsButtonGroup, 'options'>;

const ButtonGroupGender: React.FC<IProps> = ({ ...props }) => {
    return (
        <ButtonGroup
            {...props}
            options={[
                { text: 'เพศชาย', value: 'm' },
                { text: 'เพศหญิง', value: 'w' },
            ]}
        />
    );
};

export default ButtonGroupGender;
