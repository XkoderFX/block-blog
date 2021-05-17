import React from 'react';
import ReactMarkdown from 'react-markdown';
import IPost from '../../../data/post';
import classes from './post-content.module.css';
import PostHeader from './post-header.component';

interface PostContentProps {
    post: IPost;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath}></PostHeader>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
