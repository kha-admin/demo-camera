import type { ISanitySchemaArray, ISchemaSlug } from '../sanity';

import { sanityQuery } from '@/utils/client';

export interface IQueryWidgetNavbarResult {
    navbarMenu: ISanitySchemaArray<{
        _id: string;
        title: string;
        menuName: string;
        path: ISchemaSlug;
    }>[];
}

export const I_QUERY_WIDGET_NAVBAR = `
* [_type == "widgetNavbar"] | order(_updatedAt desc) [0] {
    'navbarMenu': navbarMenu[]->
}
`;

export async function queryWidgetNavbar(): Promise<IQueryWidgetNavbarResult> {
    return sanityQuery<IQueryWidgetNavbarResult>(I_QUERY_WIDGET_NAVBAR);
}
