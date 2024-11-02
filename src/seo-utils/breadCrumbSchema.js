export const breadCrumbSchema = (name, host, url) => {
    const urlName = url ? url.split('/') : '';
    const itemListElements = [
        {
            '@type': 'ListItem',
            position: 1,
            item: {
                '@id': host,
                name: 'Home',
            },
        },
    ];

    // Check if there are enough parts in the URL to add second and third items
    for (let i = 3; i < urlName.length; i++) {
        if (urlName[i]) {
            itemListElements.push({
                '@type': 'ListItem',
                position: i - 1,
                item: {
                    '@id': `${host}/${urlName[i]}`,
                    name: urlName[i],
                },
            });
        }
    }

    return JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: itemListElements,
    });
};
