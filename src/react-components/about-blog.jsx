import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../css/about-blog.css';

library.add(fab);

class AboutBlog extends React.Component {
    render() {
        return (
            <div className="aboutBlog">
                <h1>Kia Ora!</h1>
                <div className="zachHuxfordImage">
                    <img src="https://s3-ap-southeast-2.amazonaws.com/blog-zachhuxford-io/blog/author/Zach+Huxford/cropped_me.jpg" />
                </div>
                <div className="body">
                    <p>
                        My name is Zach Huxford and this is my blog.
                    </p>
                    <p>
                        I am currently a Software Engineering Student at the <a href="https://www.auckland.ac.nz/">University of Auckland</a> working part-time 
                        at <a href="https://www.vinsight.net">Vinsight</a> as a Web Developer Intern.
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
                    <h3>Since you can probably dox me anyways</h3>
                    <p className="links">
                        
                        <a href="https://www.facebook.com/zachbwh"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                        <a href="https://www.instagram.com/zachbwh/"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                        <a href="https://www.snapchat.com/add/zachbwh"><FontAwesomeIcon icon={["fab", "snapchat"]} /></a>
                        <a href="https://t.me/zachbwh"><FontAwesomeIcon icon={["fab", "telegram"]} /></a>
                        <a href="https://twitter.com/zachbwh"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                        <a href="https://github.com/zachbwh"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                        <a href="https://www.linkedin.com/in/zachbwh/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                        <a href="https://www.last.fm/user/zachbwh"><FontAwesomeIcon icon={["fab", "lastfm"]} /></a>
                        <a href="https://open.spotify.com/user/zachbwh"><FontAwesomeIcon icon={["fab", "spotify"]} /></a>
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutBlog;