import React from 'react';
import IPost from '../../content/data/post';
import PostItem from './post-item.component';
import classes from './posts-grid.styles.module.css';

interface PostsGridProps {
    posts: IPost[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
    return (
        <ul className={classes.grid}>
            {posts.map((post) => (
                <PostItem key={post.slug} post={post}></PostItem>
            ))}
        </ul>
    );
};

export default PostsGrid;
