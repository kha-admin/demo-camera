import { type GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import LiveLayout from '@/components/layout/live';
import LoginForm from '@/components/login_form';
import {
    type IQueryWidgetLogoResult,
    I_QUERY_WIDGET_LOGO,
    queryWidgetLogo,
} from '@/data_services/sanity_groq';
import { prefetchSanityCms } from '@/utils/prefetch';
import { sanityImageProps } from '@/utils/sanity_image';

type IProps = IPageProps;

const Login: React.FC = () => {
    const title = 'บริษัท เคหะสุขประชา จำกัด (มหาชน)';

    const {
        data: { logo },
    } = useQuery<IQueryWidgetLogoResult>(I_QUERY_WIDGET_LOGO, async () => queryWidgetLogo(), {
        staleTime: Infinity,
    });

    return (
        <LiveLayout bgEffect={true}>
            <div className="min-h-screen max-w-[500px] grid grid-cols-1 gap-6 content-center mx-auto text-center p-4 md:p-6">
                {/* logo */}
                <div className="avatar mx-auto">
                    <div className="w-24 rounded">
                        <Image
                            {...sanityImageProps(logo)}
                            layout="responsive"
                            width={100}
                            height={100}
                            objectFit="contain"
                        />
                    </div>
                </div>

                {/* title */}
                <p className="text-3xl">{title}</p>

                {/* subtitle */}
                <p className="text-2xl mt-8 md:mt-16">{'เจ้าหน้าที่ ลงชื่อเข้าใช้'}</p>

                {/* form */}
                <LoginForm />
            </div>
        </LiveLayout>
    );
};

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const client = new QueryClient();

    await prefetchSanityCms(client, () => []);

    return {
        props: {
            dehydratedState: dehydrate(client),
        },
    };
};

export default Login;
