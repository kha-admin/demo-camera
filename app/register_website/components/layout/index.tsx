import Head from 'next/head';
import React, { Fragment } from 'react';
import { useQuery } from 'react-query';

import { Link } from '@/components/links';
import Navbar from '@/components/navbar';
import { sanityImageProps } from '@/sanity/image';
import { type ISchemaMetadata } from '@/sanity/query/types';
import { I_QUERY_WIDGET_LOGO, queryWidgetLogo } from '@/sanity/query/widget_logo';
import { I_QUERY_WIDGET_NAVBAR, queryWidgetNavbar } from '@/sanity/query/widget_navbar';

type IProps = {
    head?: ISchemaMetadata;
};

const Layout: React.FC<IProps> = ({ children, head }) => {
    const {
        data: { favicon, logo },
    } = useQuery(I_QUERY_WIDGET_LOGO, async () => queryWidgetLogo(), {
        staleTime: Infinity,
    });

    const {
        data: { navbarMenu },
    } = useQuery(I_QUERY_WIDGET_NAVBAR, async () => queryWidgetNavbar(), {
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
                    <Navbar navbarMenu={navbarMenu} logo={logo} />
                </div>
                <div className="drawer h-full">
                    <input id="hamburger" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">{children}</div>
                    <div className="drawer-side" style={{ maxHeight: 'unset' }}>
                        <label htmlFor="hamburger" className="drawer-overlay"></label>
                        <ul className="menu overflow-y-auto w-80 bg-base-100 divide-y-2">
                            {navbarMenu.map((item) => {
                                return (
                                    <li key={`sidemenu-${item._id}`}>
                                        <Link
                                            href={item.path.current}
                                            className="btn btn-link btn-primary"
                                        >
                                            {item.menuName}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;
