import { type GetStaticProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';

import Layout from '@/components/layout';
import SurveyForm from '@/components/survey_form';
import { prefetchSanityCms } from '@/utils/prefetch';

type IProps = IPageProps;

const Home: React.FC = () => {
    return (
        <Layout>
            <section className="relative w-full min-h-screen">
                <SurveyForm />
            </section>
        </Layout>
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

export default Home;
