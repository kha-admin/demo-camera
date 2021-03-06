import { type GetStaticProps } from 'next';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import Webcam from 'react-webcam';

import Layout from '@/components/layout';
import { prefetchSanityCms } from '@/utils/prefetch';

type IProps = IPageProps;

const Home: React.FC = () => {
    return (
        <Layout>
            <section className="relative w-full min-h-screen">
                <div className="grid grid-cols-1 gap-6 lg:gap-10 p-6 lg:py-10">
                    <h1>Home Page</h1>
                    <Webcam
                        className="w-full rounded"
                        audio={false}
                        screenshotFormat="image/png"
                        videoConstraints={{ width: 1920, height: 1080, facingMode: 'user' }}
                    >
                        {({ getScreenshot }) => (
                            <button
                                onClick={() => {
                                    const imageSrc = getScreenshot({
                                        width: 1920,
                                        height: 1080,
                                    });

                                    console.log('imageSrc ===>', imageSrc);
                                }}
                            >
                                capture
                            </button>
                        )}
                    </Webcam>
                </div>
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
