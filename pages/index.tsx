import { GetStaticProps } from 'next';
import React from 'react';
import FeaturedPosts from '../components/home-page/featured-posts.component';
import Hero from '../components/home-page/hero.component';
import IPost from '../data/post';
import { getFeaturedPosts } from '../lib/post-util';

interface HomePageProps {
    posts: IPost[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
    return (
        <>
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
