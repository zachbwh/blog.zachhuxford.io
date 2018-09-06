import React from 'react';

import BlogPostThumbnailLarge from '../blogpost/blogpost-previews/blogpost-thumbnail-large';
import LoadingIcon from '../loading-icon';
import ErrorPage from '../error-page';
import AboutBlog from '../about-blog';

import config from '../../config.js';

import './homepage.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            blogposts: null
        }
    }

    componentDidMount() {
        this.getAndUpdatePosts();
    }

    getAndUpdatePosts() {
        fetch(config.api.domain + "/posts")
            .then(res => {
                if (res.status === 404) {
                    return Promise.reject({message: "404: blogposts not found"});
                }
                return res.json();
            })
            .then(
                (result) => {
                    // sort posts by descending date order
                    var sortedPosts = result.sort(function(post1, post2) {
                        var dateDifference = post2.date - post1.date;
                        return dateDifference !== 0 ? dateDifference : post2.postID - post1.postID;
                    });

                    this.setState({
                        isLoaded: true,
                        blogposts: sortedPosts
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, blogposts } = this.state;

        if (error) {
            console.log(error.message)
            return <ErrorPage error={error.message} />;
        } else if (!isLoaded) {
            return <LoadingIcon />;
        } else {
            return (
                <div className="homepage">
                    <AboutBlog />
                    <div>
                        <h1>Recent Posts</h1>
                        {blogposts.map(function(blogpost) {
                            return <BlogPostThumbnailLarge key={ blogpost.postID } blogpost={ blogpost }/>
                        })}
                    </div>
                </div>
            );
        }
    }
}

export default HomePage;