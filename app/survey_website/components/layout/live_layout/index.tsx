import React from 'react';

import TransitionEffect from '@/components/transition_effect';

interface IProps {
    bgEffect?: boolean;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    children: React.ReactNode;
}

const LiveLayout: React.FC<IProps> = ({ className, children, bgEffect }) => {
    return (
        <div className={className || 'h-full w-full'}>
            {children}
            {bgEffect && (
                <React.Fragment>
                    <div className="absolute inset-0 z-[-1]">
                        <TransitionEffect />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default LiveLayout;
