import React from 'react';

import BlogPost from './blogpost.js';
import HomePage from './homepage.js';
import AboutPage from './aboutpage.js';

class PageRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var path = window.location.pathname;
        if (path === "" || path === "/") {
            return (
                <HomePage />
            );
        } else if (path === "/about") {
            return (
                <AboutPage />
            );
        } else {
            return <BlogPost />
        }
    }
}

export default PageRouter;
