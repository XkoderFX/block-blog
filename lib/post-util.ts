import fs from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';

interface FilePost {
    [key: string]: string;
    content: string;
    slug: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

const getPostData = async (fileName: string) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(filePath, `utf-8`);

    const { data, content } = matter(fileContent);

    const postSlug = fileName.split('.')[0]; // removes the file extension

    const postData: FilePost = { ...data, content, slug: postSlug };
    return postData;
};

const getAllPosts = async () => {
    const postFiles = await fs.readdir(postsDirectory);

    const allPosts = await Promise.all(
        postFiles.map((postFile) => getPostData(postFile))
    );
    allPosts.sort((postA, postB) =>
        Number(postA.date) - Number(postB.date) ? -1 : 1
    );
    return allPosts;
};

const getFeaturedPosts = async () => {
    const allPosts = await getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
    return featuredPosts;
};
