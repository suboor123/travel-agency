import { useState, useEffect } from 'react';

const useIntersectionObserver = (options) => {
    const [ref, setRef] = useState(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return { ref, isIntersecting, setRef };
};

export default useIntersectionObserver;
