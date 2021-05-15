import React from 'react';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header.component';

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2022-02-10',
    content: `# this is a first post`,
};
const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath}></PostHeader>
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;