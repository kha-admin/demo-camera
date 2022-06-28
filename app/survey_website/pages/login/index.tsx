import { type GetStaticProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';

import FormLogin from '@/components/form_login';
import LiveLayout from '@/components/layout/live';
import { prefetchSanityCms } from '@/utils/prefetch';

type IProps = IPageProps;

const Login: React.FC = () => {
    return (
        <LiveLayout bgEffect={true}>
            {/* subtitle */}
            <p className="text-2xl mt-8 md:mt-16">{'เจ้าหน้าที่ ลงชื่อเข้าใช้'}</p>

            {/* form */}
            <FormLogin />
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
