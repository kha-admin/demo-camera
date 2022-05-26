import KY from 'ky';

export type IKyInstance = typeof KY;

export const thaikubClient = KY.extend({
    prefixUrl: 'https://thaiaddressapi-thaikub.herokuapp.com/',
});

export const localClient = KY.extend({
    prefixUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

export default KY;
