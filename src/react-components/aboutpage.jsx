import React from 'react';

import AboutBlog from './about-blog';

import '../css/about-page.css'

class AboutPage extends React.Component {
    render() {
        return (
            <div className="aboutPage">
                <AboutBlog />
            </div>
        );
    }
}

export default AboutPage;