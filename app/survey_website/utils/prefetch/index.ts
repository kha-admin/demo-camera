import { QueryClient } from 'react-query';

import { I_QUERY_WIDGET_LOGO, queryWidgetLogo } from '@/data_services/sanity_widgetLogo';
import { I_QUERY_WIDGET_NAVBAR, queryWidgetNavbar } from '@/data_services/sanity_widgetNavbar';

export async function prefetchSanityCms(
    client: QueryClient,
    query: (client: QueryClient) => Promise<void>[],
): Promise<void> {
    await Promise.all([
        client.prefetchQuery(I_QUERY_WIDGET_LOGO, async () => queryWidgetLogo()),
        client.prefetchQuery(I_QUERY_WIDGET_NAVBAR, async () => queryWidgetNavbar()),
        ...query(client),
    ]);
}
