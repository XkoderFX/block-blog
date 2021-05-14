import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './post-item.styles.module.css';
import IPost from '../../data/post';

interface PostItemProps {
    post: IPost;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    return (
        <li className={classes.post}>
            <Link href={'d'}>
                <a>
                    <figure>
                        <Image
                            src={imagePath}
                            alt={post.title}
                            width={300}
                            height={200}
                            className={classes.image}
                        ></Image>
                        <figcaption className={classes.content}>
                            <h3>{post.title}</h3>
                            <time>{formattedDate}</time>
                            <p>{post.excerpt}</p>
                        </figcaption>
                    </figure>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
