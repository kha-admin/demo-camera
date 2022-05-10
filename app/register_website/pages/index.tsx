import { type GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import Layout from '@/components/layout';
import { Link } from '@/components/links';
import SanityContentBlock from '@/components/sanity_content_block';
import { sanityImageProps } from '@/sanity/image';
import { I_QUERY_PAGE_HOME, queryPageHome } from '@/sanity/query/page_home';
import { prefetchSanityCms } from '@/utils/prefetch';

type IProps = IPageProps;

const Home: React.FC = () => {
    const { data } = useQuery(I_QUERY_PAGE_HOME, async () => queryPageHome(), {
        staleTime: Infinity,
    });

    return (
        <Layout head={data.metadata}>
            <section className="relative w-full min-h-screen">
                <div className="absolute inset-0">
                    <Image
                        {...sanityImageProps(data.backgroundImage)}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="grid grid-cols-1 gap-6 lg:gap-10 p-6 lg:py-10">
                    
                </div>
            </section>
        </Layout>
    );
};

// export const getStaticProps: GetStaticProps<IProps> = async () => {
//     const client = new QueryClient();

//     await prefetchSanityCms(client, (sanityClient) => [
//         sanityClient.prefetchQuery(I_QUERY_PAGE_HOME, async () => queryPageHome()),
//     ]);

//     return {
//         props: {
//             dehydratedState: dehydrate(client),
//         },
//     };
// };

export default Home;
