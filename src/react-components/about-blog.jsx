import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faSnapchat, faTelegram, faTwitter, faGithub, faLinkedin, faLastfm, faSpotify } from '@fortawesome/free-brands-svg-icons';

import '../css/about-blog.css';

library.add(faFacebook, faInstagram, faSnapchat, faTelegram, faTwitter, faGithub, faLinkedin, faLastfm, faSpotify);

class AboutBlog extends React.Component {
    render() {
        return (
            <div className="aboutBlog">
                <h1>Kia Ora!</h1>
                <div className="zachHuxfordImage">
                    <img alt="Headshot of Zach Huxford" src="https://s3-ap-southeast-2.amazonaws.com/blog-zachhuxford-io/blog/author/Zach+Huxford/cropped_me.jpg" />
                </div>
                <div className="body">
                    <p>
                        My name is Zach Huxford and this is my blog.
                    </p>
                    <p>
                        I'm a Software Developer.
                    </p>
                    <p>
                        Although I flat in Auckland with my mates currently, I am originally from Wellington (New Zealand).
                    </p>
                    <p>
                        In my spare time, among other things, I enjoy:
                        <ul>
                            <li>Cooking for friends!</li>
                            <li>Thrift shopping</li>
                            <li>"Ricing" My Computer</li>
                            <li>Listening to Music (Only ironically, don't worry)</li>                        
                        </ul>
                        So I figure this blog will be about the software related projects that I do and perhaps some of the things listed above.
                        <br/><br/> We shall see how it goes!<br/>
                    </p>
                </div>
                <div>
                    <p className="links">
                        <a href="https://www.facebook.com/zachbwh"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/zachbwh/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.snapchat.com/add/zachbwh"><FontAwesomeIcon icon={faSnapchat} /></a>
                        <a href="https://t.me/zachbwh"><FontAwesomeIcon icon={faTelegram} /></a>
                        <a href="https://twitter.com/zachbwh"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://github.com/zachbwh"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/zachbwh/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://www.last.fm/user/zachbwh"><FontAwesomeIcon icon={faLastfm} /></a>
                        <a href="https://open.spotify.com/user/zachbwh"><FontAwesomeIcon icon={faSpotify} /></a>
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutBlog;