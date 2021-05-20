import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import FeaturedPosts from '../components/home-page/featured-posts.component';
import Hero from '../components/home-page/hero.component';
import IPost from '../content/data/post';
import { getFeaturedPosts } from '../lib/post-util';

interface HomePageProps {
    posts: IPost[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Rafael's code blog all about js and next</title>
                <meta
                    name="description"
                    content="I'm blogging about programing especially about web development"
                ></meta>
            </Head>
            <Hero></Hero>
            <FeaturedPosts posts={posts}></FeaturedPosts>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const featuredPosts = await getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
        revalidate: 60,
    };
};

export default HomePage;
