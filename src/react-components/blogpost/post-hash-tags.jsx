import React from 'react';

import './post-hash-tags.css';


class PostHashTags extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: props.tags,
            length: props.length
        };
    }

    render() {
        var numberOfTagsToRender = this.props.length ? (this.props.length < this.props.tags.length ? this.props.length : this.props.tags.length) : this.props.tags.length;
        var tags = [];
        for (var i=0; i<numberOfTagsToRender; i++) {
            var tag = this.props.tags[i];

            if (i < numberOfTagsToRender - 1) {
                tags.push(<HashTag key={ tag } tag={ tag } seperator=", "/>);
            } else {
                tags.push(<HashTag key={ tag } tag={ tag } seperator=""/>);
            }
        }
        return (
            <div className="hashtags">
                { tags }
            </div>
        );
        
    }
}

class HashTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: props.tag,
            seperator: props.seperator
        }
    }

    render() {
        var link = "/search/tags/" + this.state.tag;
        return (
            <span key={ this.state.tag } className="hashtag"><a key={ this.state.tag } href={ link }>#{ this.state.tag }</a>{ this.state.seperator }</span>
        );
    }
}

export default PostHashTags