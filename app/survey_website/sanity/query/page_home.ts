import type { ISanitySchemaArray, ISchemaPage } from './types';

import client from '@/sanity/client';

export const I_QUERY_PAGE_HOME = `
*[_type == "pageHome"] | order(_updatedAt desc) [0] {
    metadata,
    backgroundImage,
    registerUI,
}
`;

export type IQueryPageHomeResult = ISchemaPage<{
    backgroundImage: unknown;
    registerUI: ISanitySchemaArray<unknown>[];
}>;

export async function queryPageHome(): Promise<IQueryPageHomeResult> {
    return client.fetch<IQueryPageHomeResult>(I_QUERY_PAGE_HOME);
}
