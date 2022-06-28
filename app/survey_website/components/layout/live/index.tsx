import Image from 'next/image';
import React from 'react';
import { useQuery } from 'react-query';

import TransitionEffect from '@/components/transition_effect';
import {
    type IQueryWidgetLogoResult,
    I_QUERY_WIDGET_LOGO,
    queryWidgetLogo,
} from '@/data_services/sanity_groq';
import { sanityImageProps } from '@/utils/sanity_image';

interface IProps {
    bgEffect?: boolean;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    children: React.ReactNode;
}

const Live: React.FC<IProps> = ({ className, children, bgEffect }) => {
    const { data } = useQuery<IQueryWidgetLogoResult>(
        I_QUERY_WIDGET_LOGO,
        async () => queryWidgetLogo(),
        {
            staleTime: Infinity,
        },
    );

    return (
        <div className={className || 'h-full w-full'}>
            <div className="min-h-screen max-w-[500px] grid grid-cols-1 gap-6 content-center mx-auto text-center p-4 md:p-6">
                {/* logo */}
                <div className="avatar mx-auto">
                    <div className="w-24 rounded">
                        <Image
                            {...sanityImageProps(data?.logo)}
                            layout="responsive"
                            width={100}
                            height={100}
                            objectFit="contain"
                        />
                    </div>
                </div>

                {/* title */}
                <p className="text-3xl">{'บริษัท เคหะสุขประชา จำกัด (มหาชน)'}</p>

                {children}
            </div>

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

export default Live;
