import { get, isObject, isString } from 'lodash-es';
import { useNextSanityImage, type UseNextSanityImageProps } from 'next-sanity-image';

import sanityClient from '../client';

import { unsplashLoader } from '@/utils/unsplash_image_loader';

const defaultImageLoader: Omit<UseNextSanityImageProps, 'placeholder'> = {
    loader: unsplashLoader,
    width: 800,
    height: 400,
    src: 'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1904&q=80',
};

export interface ISanityImageProps {
    _type: 'image';
    asset: {
        _ref: string;
    };
}

export function isSanityImage(value: unknown): value is ISanityImageProps {
    return isObject(value) && get(value, '_type') === 'image' && isString(get(value, 'asset._ref'));
}

export function sanityImageProps(value: unknown): Omit<UseNextSanityImageProps, 'placeholder'> {
    if (!isSanityImage(value)) return defaultImageLoader;

    return useNextSanityImage(sanityClient, value);
}
