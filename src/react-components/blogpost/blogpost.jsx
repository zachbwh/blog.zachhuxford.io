import React from 'react';
import moment from 'moment';
import Handlebars from 'handlebars';
import Disqus from 'disqus-react';

import PostHashTags from './post-hash-tags'
import NavigateButtons from './navigate-buttons';
import LoadingIcon from '../loading-icon';
import AboutAuthor from '../author';

import config from '../../config.js';

import './blogpost.css';


class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            blogpost: null
        }
    }

    componentDidMount() {
        this.getAndUpdatePost();
    }

    render() {
        const { error, isLoaded, blogpost } = this.state;
        if (error) {
            console.log(error.message)
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <LoadingIcon />;
        } else {
            var disqusConfig = {
                url: config.disqus.domain + "/" + blogpost.postID + "-" + blogpost.urlTitle + "/",
                identifier: blogpost.disqusID,
                title: blogpost.title
            }
            var disqusShortname = "zachhuxford-io"

            return (
                <div className="blogpost">
                    <h1 className="title">{blogpost.title}</h1>
                    <PostHashTags tags={blogpost.tags} />
                    <p className="date">{this.renderPostDate()}</p>
                    <NavigateButtons prevPost={blogpost.previousPost} nextPost={blogpost.nextPost} changePost={this.renderNewPost} />
                    <div dangerouslySetInnerHTML={{__html: blogpost.body}}/>
                    <NavigateButtons prevPost={blogpost.previousPost} nextPost={blogpost.nextPost} changePost={this.renderNewPost}/>
                    <AboutAuthor author={blogpost.author} />
                    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            );
        }
    }

    renderPostDate() {
        var date = moment.unix(this.state.blogpost.date);
        return date.format('LL');
    }

    getAndUpdatePost() {
        fetch(config.api.domain + "/posts" + window.location.pathname)
            .then(res => {
                if (res.status === 404) {
                    return Promise.reject({message: "404: blogpost not found"});
                }
                return res.json();
            })
            .then(
                (result) => {
                    // Compile image links into HTML body before rendering
                    var template = Handlebars.compile(result.body)
                    result.body = template(result.images);

                    this.setState({
                        isLoaded: true,
                        blogpost: result
                    });
                    document.title = result.title + " - Zach Huxford's Blog"
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

    renderNewPost = (blogpost) => {
        window.history.pushState("New Post Rendering", "Zach Huxford's Blog - " + blogpost.title , "/" + blogpost.postID + "-" + blogpost.urlTitle + "/");
        this.getAndUpdatePost();
    }
}

export default BlogPost;