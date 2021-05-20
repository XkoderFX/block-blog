import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import Layout from '../components/layout/layout.component';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
