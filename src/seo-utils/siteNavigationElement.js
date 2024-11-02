import { HOST } from '@/constants';

export const siteNavigationElement = () => {
    return JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'siteNavigationElement',
        potentialAction: {
            '@type': 'SearchAction',
            target: HOST + '/search?&q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
        name: [],
        url: [
            'https://www.suboorkhan.com/',
            'https://www.suboorkhan.com/index.html',
            'https://www.suboorkhan.com/about',
            'https://www.suboorkhan.com/projects',
            'https://www.suboorkhan.com/blogs',
            'https://www.suboorkhan.com/live-sessions',
            'https://www.suboorkhan.com/contact',
        ],
    });
};
