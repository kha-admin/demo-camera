import KY from 'ky';

export type IKyInstance = typeof KY;

export const thaikubClient = KY.extend({
    prefixUrl: 'https://thaiaddressapi-thaikub.herokuapp.com/',
});
