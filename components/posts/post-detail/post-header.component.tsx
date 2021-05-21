import React from 'react';
import classes from './post-header.module.css';

interface PostHeaderProps {
    title: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title }) => {
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
        </header>
    );
};

export default PostHeader;
