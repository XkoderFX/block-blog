import React from 'react';
import PostItem from './post-item.component';
import classes from './posts-grid.styles.module.css';

interface PostsGridProps {
    posts: unknown[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
    return (
        <ul className={classes.gird}>
            {posts.map((post) => (
                <PostItem></PostItem>
            ))}
        </ul>
    );
};

export default PostsGrid;
