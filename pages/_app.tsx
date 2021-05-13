import type { AppProps /*, AppContext */ } from 'next/app';
import React from 'react';
import Layout from '../components/layout/layout.component';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
