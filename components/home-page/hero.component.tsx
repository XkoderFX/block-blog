import React from 'react';
import classes from './hero.styles.module.css';
import Image from 'next/image';
const Hero = () => {
    return (
        <section className={classes.hero}>
            <figure className={classes.image}>
                <Image
                    src="/images/profile_picture.jpg"
                    alt="an image that showing my face"
                    width={300}
                    height={300}
                />
                <figcaption>caption</figcaption>
            </figure>
            <h1>Hi, I'm Rafael</h1>
            <p>
                a blog web development - especially frontend technologies like
                React and Angular
            </p>
        </section>
    );
};

export default Hero;
