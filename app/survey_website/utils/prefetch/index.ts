import { QueryClient } from 'react-query';

import {
    I_QUERY_WIDGET_NAVBAR,
    queryWidgetNavbar,
    I_QUERY_WIDGET_LOGO,
    queryWidgetLogo,
} from '@/data_services/sanity_groq';
import { I_GET_THAI_PROVICE_KEY, getThaiProvinceData } from '@/data_services/thai_province_data';

export async function prefetchSanityCms(
    client: QueryClient,
    query: (client: QueryClient) => Promise<void>[],
): Promise<void> {
    await Promise.all([
        client.prefetchQuery(I_QUERY_WIDGET_LOGO, async () => queryWidgetLogo()),
        client.prefetchQuery(I_QUERY_WIDGET_NAVBAR, async () => queryWidgetNavbar()),
        client.prefetchQuery(I_GET_THAI_PROVICE_KEY, () => getThaiProvinceData()),
        ...query(client),
    ]);
}
