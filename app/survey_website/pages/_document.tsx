import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocs extends Document {
    render(): JSX.Element {
        return (
            <Html data-theme="kha" style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocs;
