import React from 'react';

import './post-hash-tags.css';


class PostHashTags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: props.tags,
            length: props.length
        }
    }

    render() {
        if (!this.state.length) {
            return (
                <div className="hashtags">
                    {this.state.tags.map(function(tag, index, array) {
                        var link = "/search/tags/" + tag;
                        if (index < array.length - 1) {
                            return <span className="hashtag"><a href={ link }>#{ tag }</a>, </span>
                        } else {
                            return <span className="hashtag"><a href={ link }>#{ tag }</a></span>
                        }
                    })}
                </div>                    
            );
        } else {
            var tags = [];
            for (var i=0; i<this.state.length; i++) {
                var tag = this.state.tags[i];
                var link = "/search/tags/" + tag;

                if (i < this.state.length - 1) {
                    tags.push(<span className="hashtag"><a href={ link }>#{ tag }</a>, </span>);
                } else {
                    tags.push(<span className="hashtag"><a href={ link }>#{ tag }</a></span>);
                }
            }
            return (
                <div className="hashtags">
                    { tags }
                </div>
            );
        }
        
    }
}

export default PostHashTags