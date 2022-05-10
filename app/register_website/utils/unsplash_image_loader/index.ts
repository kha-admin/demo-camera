import { type ImageLoaderProps } from 'next/image';

const I_UNSPASH_HOSTNAME = 'images.unsplash.com';

function destructUnsplashImage(value: string): {
    isUnsplashImageUrl: boolean;
    url: URL;
} {
    const url = new URL(value);

    const isUnsplashImageUrl = url.hostname === I_UNSPASH_HOSTNAME;

    return {
        isUnsplashImageUrl,
        url,
    };
}

export function unsplashLoader({ src, width, quality }: ImageLoaderProps): string {
    const { isUnsplashImageUrl, url } = destructUnsplashImage(src);

    if (!isUnsplashImageUrl) return src;

    url.searchParams.set('w', width.toString());
    quality && url.searchParams.set('q', quality.toString());

    return url.toString();
}
