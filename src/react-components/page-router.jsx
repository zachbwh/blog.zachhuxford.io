import React from 'react';

import BlogPost from './blogpost/blogpost';
import HomePage from './homepage';
import AboutPage from './aboutpage';
import SearchPage from './searchpage';

class PageRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var path = window.location.pathname;
        if (path === "" || path === "/") {
            return <HomePage />
        } else if (path === "/about") {
            return <AboutPage />
        } else if (path.startsWith("/search")) {
            return <SearchPage />
        } else {
            return <BlogPost />
        }
    }
}

export default PageRouter;
