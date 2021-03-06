import React from 'react'

import PostHashTags from '../post-hash-tags';

import moment from 'moment';

import './blogpost-thumbnail-large.css';

class BlogPostThumbnailLarge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogpost: props.blogpost
        }
    }

    render() {
        var blogpost = this.state.blogpost;
        var thumbnailSrc = blogpost.images.thumbnail ? blogpost.images.thumbnail : blogpost.images[Object.keys(blogpost.images)[0]];
        var blogpostURL = "/" + blogpost.postID + "-" + blogpost.urlTitle;
        return (
            <div className="blogpostThumbnailLarge" >
                <div className="container">
                    <a href={ blogpostURL }><img className="thumbnail" src={ thumbnailSrc } alt=""/></a>
                    <div className="body">
                        <a className="postLink" href={ blogpostURL }>{ blogpost.title }</a>
                        <div>
                            <span className="author">{ blogpost.author.name }</span>
                            <PostHashTags tags={blogpost.tags} length={5}/>
                            <p className="date">{this.renderPostDate()}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderPostDate() {
        var date = moment.unix(this.state.blogpost.date);
        return date.format('LL');
    }
}

export default BlogPostThumbnailLarge;