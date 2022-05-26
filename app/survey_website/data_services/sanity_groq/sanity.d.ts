export type ISanitySchemaArray<T> = T & { _key: string };

export interface ISchemaMetadata {
    title: string;
    description: string;
    canonical?: string[];
    hreflang?: { url?: string; lang?: string }[];
}

export type ISchemaPage<T> = T & {
    metadata: ISchemaMetadata;
};

export interface ISchemaLink {
    text: string;
    link: string;
}

export interface ISchemaSlug {
    current: string;
}
