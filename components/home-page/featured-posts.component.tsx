import React from 'react';
import IPost from '../../content/data/post';
import PostsGrid from '../posts/posts-grid.component';
import classes from './featured-posts.style.module.css';

interface FeaturedPostsProps {
    posts: IPost[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts}></PostsGrid>
        </section>
    );
};

export default FeaturedPosts;
