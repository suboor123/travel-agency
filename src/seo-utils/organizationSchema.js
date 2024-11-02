import { APP_TITLE, HOST } from '@/constants';

export const organizationSchema = () => {
    return JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Organization',
        name: APP_TITLE,
        url: HOST,
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+91-7011879824',
                contactType: 'Owner',
            },
        ],
        logo: HOST + '/assets/me.jpg',
        sameAs: [],
    });
};
