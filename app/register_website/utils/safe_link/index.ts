export function isExternalLink(value: string): boolean {
    return value.startsWith('http://') || value.startsWith('https://');
}

export function safeWindowOpen(value: string): {
    href: string;
    rel?: string;
    target?: string;
} {
    const rel = isExternalLink(value) ? 'noreferrer noopener' : undefined;
    const target = isExternalLink(value) ? '_blank' : undefined;

    return {
        href: value,
        rel,
        target,
    };
}
