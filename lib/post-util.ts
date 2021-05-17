import fs from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';

interface FilePost {
    [key: string]: string;
    content: string;
    slug: string;
}

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export const getPostsFiles = async () => {
    return fs.readdir(postsDirectory);
};

export const getPostData = async (postId: string) => {
    const postSlug = postId.split('.')[0]; // removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = await fs.readFile(filePath, `utf-8`);

    const { data, content } = matter(fileContent);

    const postData: FilePost = { ...data, content, slug: postSlug };
    return postData;
};

export const getAllPosts = async () => {
    const postFiles = await fs.readdir(postsDirectory);

    const allPosts = await Promise.all(
        postFiles.map((postFile) => getPostData(postFile))
    );
    allPosts.sort((postA, postB) =>
        Number(postA.date) - Number(postB.date) ? -1 : 1
    );
    return allPosts;
};

export const getFeaturedPosts = async () => {
    const allPosts = await getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
    return featuredPosts;
};
