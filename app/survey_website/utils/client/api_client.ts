import KY from 'ky';

export type IKyInstance = typeof KY;

export const localClient = KY.extend({
    prefixUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

export default KY;
