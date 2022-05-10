import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import React, { useMemo } from 'react';

import { Link } from '@/components/links';

const components: Partial<PortableTextReactComponents> = {
    block: {
        h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
        cardH2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
        cardH3: ({ children }) => <h2 className="text-2xl">{children}</h2>,
        normal: ({ children, value }) => {
            const isEmptyValue =
                Array.isArray(value.children) && !String(value.children[0].text).trim();

            if (isEmptyValue) return <br />;

            return <p className="text-base">{children}</p>;
        },
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="text-base font-normal">{children}</li>,
        number: ({ children }) => <li className="text-base font-normal">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong>{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        code: ({ children }) => <code>{children}</code>,
        link: ({ children, value }) => {
            return (
                <Link href={value} className="underline text-primary hover:text-secondary">
                    {children}
                </Link>
            );
        },
        linkButton: ({ children, value }) => {
            return (
                <div className="text-center">
                    <Link href={value} className="btn btn-outline btn-primary">
                        {children}
                    </Link>
                </div>
            );
        },
        span: ({ children }) => <span className="text-base">{children}</span>,
    },
};

type IProps = {
    value: never[];
};

const SanityBlock: React.FC<IProps> = ({ value }) => {
    return useMemo(() => <PortableText value={value} components={components} />, [value]);
};

export default SanityBlock;
