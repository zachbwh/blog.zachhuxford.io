import React from 'react';

import NavBar from './nav-bar/nav-bar';
import BlogPost from './blogpost/blogpost';
import HomePage from './homepage/homepage';
import AboutPage from './aboutpage';
import SearchPage from './searchpage';

class PageRouter extends React.Component {
    render() {
        var path = window.location.pathname;
        if (path === "" || path === "/") {
            return (
                <div>
                    <NavBar />                
                    <HomePage />
                </div>
            )
        } else if (path === "/about") {
            return (
                <div>
                    <NavBar />                
                    <AboutPage />
                </div>
            )
        } else if (path.startsWith("/search")) {
            return (
                <div>
                    <NavBar />                
                    <SearchPage />
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar />                
                    <BlogPost />
                </div>
            )
        }
    }
}

export default PageRouter;
