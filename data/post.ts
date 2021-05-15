export default interface IPost {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
}

export const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        date: '2022-02-10',
        excerpt:
            'NextJS is the React Framework for production, with that it much more simpler to build and ships full-stack react app with built-in SSR.',
    },

    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        date: '2022-02-10',
        excerpt:
            'NextJS is the React Framework for production, with that it much more simpler to build and ships full-stack react app with built-in SSR.',
    },

    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        date: '2022-02-10',
        excerpt:
            'NextJS is the React Framework for production, with that it much more simpler to build and ships full-stack react app with built-in SSR.',
    },

    {
        slug: 'getting-started-with-nextjs4',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        date: '2022-02-10',
        excerpt:
            'NextJS is the React Framework for production, with that it much more simpler to build and ships full-stack react app with built-in SSR.',
    },
];
