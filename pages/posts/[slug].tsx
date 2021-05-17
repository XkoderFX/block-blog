import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import PostContent from '../../components/posts/post-detail/post-content.component';
import IPost from '../../content/data/post';
import { getPostData, getPostsFiles } from '../../lib/post-util';

interface PostDetailProps {
    post: IPost;
}

const PostDetailPage: React.FC<PostDetailProps> = ({ post }) => {
    return <PostContent post={post}></PostContent>;
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    const slug = params?.slug as string;

    const postData = await getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const postFiles = await getPostsFiles();

    const slugs = postFiles.map((fileName) => fileName.split('.')[0]);

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};
export default PostDetailPage;
