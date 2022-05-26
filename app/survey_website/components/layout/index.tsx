import Head from 'next/head';
import React, { Fragment } from 'react';
import { useQuery } from 'react-query';

import Navbar from '@/components/navbar';
import {
    type IQueryWidgetLogoResult,
    I_QUERY_WIDGET_LOGO,
    queryWidgetLogo,
} from '@/data_services/sanity_groq';
import { type ISchemaMetadata } from '@/data_services/sanity_groq/sanity';
import { sanityImageProps } from '@/utils/sanity_image';

type IProps = {
    head?: ISchemaMetadata;
};

const Layout: React.FC<IProps> = ({ children, head }) => {
    const { data } = useQuery<IQueryWidgetLogoResult>(
        I_QUERY_WIDGET_LOGO,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        async () => queryWidgetLogo(),
        {
            staleTime: Infinity,
        },
    );

    return (
        <Fragment>
            {head && (
                <Head>
                    <title>{head.title}</title>
                    <meta name="description" content={head.description} />
                    <link
                        rel="shortcut icon"
                        href={sanityImageProps(data?.favicon).src}
                        type="image/x-icon"
                    />
                </Head>
            )}
            <div className="h-full w-full bg-gray-100">
                <div className="sticky top-0 z-50">
                    <Navbar logo={data?.logo} navbarMenu={[]} />
                </div>
                {children}
            </div>
        </Fragment>
    );
};

export default Layout;
