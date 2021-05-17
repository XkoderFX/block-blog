import React from 'react';
import ReactMarkdown from 'react-markdown';
import IPost from '../../../content/data/post';
import classes from './post-content.module.css';
import PostHeader from './post-header.component';
import Image from 'next/image';
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
            if (node.children[0].type === 'img') {
                const img = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${img.src}`}
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
