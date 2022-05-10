import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'yvt40a57',
    dataset: 'production',
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
    apiVersion: '2021-03-25',
});

export async function sanityQuery<T>(query: string): Promise<T> {
    return client.fetch(query);
}

export default client;
