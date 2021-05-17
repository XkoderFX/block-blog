import { GetStaticProps } from 'next';
import React from 'react';
import AllPosts from '../../components/posts/all-posts.component';
import IPost from '../../content/data/post';
import { getAllPosts } from '../../lib/post-util';

interface AllPostsPage {
    posts: IPost[];
}

const AllPostsPage: React.FC<AllPostsPage> = ({ posts }) => {
    return <AllPosts posts={posts}></AllPosts>;
};

export const getStaticProps: GetStaticProps = async () => {
    const allPosts = await getAllPosts();

    return {
        props: {
            posts: allPosts,
        },
    };
};

export default AllPostsPage;
