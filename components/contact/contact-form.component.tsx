import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import classes from './contact-form.module.css';
import * as Yup from 'yup';

const ContactForm = () => {

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'name must contain at least 2 characters')
                        .required('Required'),
                    email: Yup.string()
                        .email('email is not valid')
                        .required('Required'),
                    message: Yup.string()
                        .min(5, 'must be at least 5 characters')
                        .required('Required'),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    
                }}
            >
                <Form className={classes.form}>
                    <div className={classes.controls}>
                        <div className={classes.control}>
                            <label htmlFor="email">Your email</label>
                            <Field name="email" type="email" required />

                            <ErrorMessage name="email">
                                {(msg) => (
                                    <p className={classes.error}>{msg}</p>
                                )}
                            </ErrorMessage>
                        </div>

                        <div className={classes.control}>
                            <label htmlFor="name">Your name</label>
                            <Field type="text" name="name" id="name" required />
                            <ErrorMessage name="name">
                                {(msg) => (
                                    <p className={classes.error}>{msg}</p>
                                )}
                            </ErrorMessage>
                        </div>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="message">Your message</label>
                        <Field
                            as="textarea"
                            id="message"
                            name="message"
                            required
                            rows={5}
                        ></Field>
                        <ErrorMessage name="message">
                            {(msg) => <p className={classes.error}>{msg}</p>}
                        </ErrorMessage>
                    </div>
                    <div className={classes.actions}>
                        <button type="submit">Send Message</button>
                    </div>
                </Form>
            </Formik>
        </section>
    );
};

export default ContactForm;
