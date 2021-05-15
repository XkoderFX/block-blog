import React from 'react';
import FeaturedPosts from '../components/home-page/featured-posts.component';
import Hero from '../components/home-page/hero.component';
import { DUMMY_POSTS } from '../data/post';

const HomePage = () => {
    return (
        <>
            <Hero></Hero>
            <FeaturedPosts posts={DUMMY_POSTS}></FeaturedPosts>
        </>
    );
};

export default HomePage;
