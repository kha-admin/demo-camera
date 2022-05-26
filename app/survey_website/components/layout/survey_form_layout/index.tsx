import React from 'react';

import Steps, { type IProps as IPropsSteps } from '@/components/steps';

export interface IProps extends Pick<IPropsSteps, 'steps' | 'current' | 'setCurrent'> {
    title?: React.ReactNode;
}

const SurveyFormLayout: React.FC<IProps> = ({ children, title, steps, current, setCurrent }) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {/* header */}
            {title && <div className="flex-auto text-2xl">{title}</div>}

            {/* steps */}
            {!!steps && (
                <div className="text-center">
                    <Steps steps={steps} current={current} setCurrent={setCurrent} />
                </div>
            )}

            {/* content */}
            <div>{children}</div>
        </div>
    );
};

export default SurveyFormLayout;
