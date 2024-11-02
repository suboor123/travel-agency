import { HOST } from '@/constants';

export const createMetaData = ({
    url = `${HOST}`,
    title = `Creative Web & Mobile Developer | Portfolio of Suboor Khan`,
    description = `Explore the portfolio of Suboor Khan, a skilled Web & Mobile Developer with over 4 years of experience in delivering impactful web solutions. Specializing in fullstack development, I design, develop, and test web applications across various industries. Discover my projects and skills in modern web technologies.`,
    keywords = `web developer, mobile developer, fullstack developer, web development portfolio, mobile app development, web solutions, fullstack web engineer, software development, front-end developer, back-end developer, technology expert, software engineer, web application design, coding professional, Suboor Khan`,
    image = 'https://www.suboorkhan.com/assets/me.jpg',
} = {}) => {
    return {
        metadataBase: new URL(HOST),
        title,
        description,
        keywords,
        url,
        openGraph: {
            type: 'website',
            url: url,
            title,
            description,
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            site: HOST,
            title,
            description,
            images: [image],
        },
        icons: {
            other: [
                { rel: 'canonical', url: url },
                {
                    rel: 'image_src',
                    url: image,
                },
            ],
        },
    };
};
