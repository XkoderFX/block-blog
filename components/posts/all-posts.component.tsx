import React from 'react';
import IPost from '../../content/data/post';
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid.component';

interface AllPostsProps {
    posts: IPost[];
}

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={posts}></PostsGrid>
        </section>
    );
};

export default AllPosts;
