import React from 'react';
import AllPosts from '../../components/posts/all-posts.component';
import { DUMMY_POSTS } from '../../data/post';

const AllPostsPage = () => {
    return <AllPosts posts={DUMMY_POSTS}></AllPosts>;
};

export default AllPostsPage;
