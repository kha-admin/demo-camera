import { get, isString, isObject } from 'lodash-es';
import NextLink from 'next/link';
import React from 'react';

import { safeWindowOpen } from '@/utils/safe_link';

function decodeSanityHref(value: unknown): string {
    if (isString(value)) return value;
    else if (isObject(value) && isString(get(value, 'href'))) return String(get(value, 'href'));
    else return '#';
}

type ISanityLinkProps = {
    href: string;
    className?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
};

const Link: React.FC<ISanityLinkProps> = ({ href, children, prefix, suffix, className }) => {
    href = decodeSanityHref(href);
    const { target, rel } = safeWindowOpen(decodeSanityHref(href));

    return (
        <NextLink href={href} passHref>
            <a target={target} rel={rel}>
                <button className={className ?? 'btn btn-outline btn-primary'}>
                    {prefix}
                    {children}
                    {suffix}
                </button>
            </a>
        </NextLink>
    );
};

const BacktoPage: React.FC<ISanityLinkProps & { text: string }> = ({ text, href }) => {
    return (
        <Link
            href={href}
            className="btn btn-link gap-2"
            prefix={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
            }
        >
            {text}
        </Link>
    );
};

export { BacktoPage, Link };
