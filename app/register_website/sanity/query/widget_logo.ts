import client from '@/sanity/client';

export interface IQueryWidgetLogoResult {
    logo: unknown;
    favicon: unknown;
}

export const I_QUERY_WIDGET_LOGO = `
* [_type == "widgetLogo"] | order(_updatedAt desc) [0] {
    logo,
    favicon,
}
`;

export async function queryWidgetLogo(): Promise<IQueryWidgetLogoResult> {
    return client.fetch<IQueryWidgetLogoResult>(I_QUERY_WIDGET_LOGO);
}
