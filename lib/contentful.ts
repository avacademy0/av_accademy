import { createClient } from 'contentful';

export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export const getBlogPosts = async () => {
    const response = await client.getEntries({
        content_type: 'avAcademyBlogs', // Make sure this matches your Contentful content type ID
        order: ['-sys.createdAt'],
    });
    return response.items;
};

export const getBlogPostBySlug = async (slug: string) => {
    const response = await client.getEntries({
        content_type: 'avAcademyBlogs',
        'fields.slug': slug,
        limit: 1,
    });
    return response.items[0];
};
