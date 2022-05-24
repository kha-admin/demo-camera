import Head from 'next/head';
import React, { Fragment } from 'react';
import { useQuery } from 'react-query';

import Navbar from '@/components/navbar';
import { type ISchemaMetadata } from '@/data_services/sanity';
import {
    type IQueryWidgetLogoResult,
    I_QUERY_WIDGET_LOGO,
    queryWidgetLogo,
} from '@/data_services/sanity_widgetLogo';
import { sanityImageProps } from '@/utils/sanity_image';

type IProps = {
    head?: ISchemaMetadata;
};

const Layout: React.FC<IProps> = ({ children, head }) => {
    const {
        data: { favicon, logo },
    } = useQuery<IQueryWidgetLogoResult>(I_QUERY_WIDGET_LOGO, async () => queryWidgetLogo(), {
        staleTime: Infinity,
    });

    return (
        <Fragment>
            {head && (
                <Head>
                    <title>{head.title}</title>
                    <meta name="description" content={head.description} />
                    <link
                        rel="shortcut icon"
                        href={sanityImageProps(favicon).src}
                        type="image/x-icon"
                    />
                </Head>
            )}
            <div className="h-full w-full bg-gray-100">
                <div className="sticky top-0 z-50">
                    <Navbar logo={logo} navbarMenu={[]} />
                </div>
                {children}
            </div>
        </Fragment>
    );
};

export default Layout;
