import React from 'react';
import ReactMarkdown from 'react-markdown';
import IPost from '../../../content/data/post';
import classes from './post-content.module.css';
import PostHeader from './post-header.component';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

interface PostContentProps {
    post: IPost;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customComponents = {
        img(img: any) {
            //! only img argument as type of any is accepted
            return (
                <Image
                    src={`/images/posts/${post.slug}/${img.src}`}
                    alt={img.alt}
                    width={600}
                    height={300}
                    layout={'responsive'}
                ></Image>
            );
        },
        p(p: any) {
            //! the same is here
            const { node } = p;
            if (node.children[0].tagName === 'img') {
                const img = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${img.properties.src}`}
                            alt={img.alt}
                            width={600}
                            height={300}
                            layout={'responsive'}
                        ></Image>
                    </div>
                );
            }

            return <p>{p.children}</p>;
        },
        code(code: any) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            console.log(language);

            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                ></SyntaxHighlighter>
            );
        },
    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title}></PostHeader>
            <ReactMarkdown components={customComponents}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
};

export default PostContent;
