import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@/styles/global.css';
import RouterGuard from '@/components/router_guard';
import { refreshAccessToken } from '@/plugins/refresh_access_token';

const App: React.FC<AppProps<IPageProps>> = ({ Component, pageProps }) => {
    const [client] = useState(() => new QueryClient());

    // register refresh access token plugin
    useEffect(() => {
        refreshAccessToken();
    }, []);

    return (
        <QueryClientProvider client={client}>
            <Hydrate state={pageProps?.dehydratedState}>
                <RouterGuard>
                    <Component {...pageProps} />
                </RouterGuard>
                <ReactQueryDevtools initialIsOpen={false} />
            </Hydrate>
        </QueryClientProvider>
    );
};

export default App;
