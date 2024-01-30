import { useEffect } from 'react';

const useDynamicPageTitle = (title) => {
    useEffect(() => {
        document.title = title;
        return () => {
            document.title = 'Welcome - Sunrise Pharmacy - Your Local Orange Pharmacy'; // Reset the title when the component unmounts or changes
        };
    }, [title]);
};

export default useDynamicPageTitle;