import Head from 'next/head';
import React from 'react';
import ContactForm from '../components/contact/contact-form.component';

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>contact me</title>
                <meta name="description" content="send me your messages" />
            </Head>
            <ContactForm></ContactForm>
        </>
    );
};

export default ContactPage;
