import React from 'react';

import LoadingIcon from './loading-icon';
import BlogPostSearchResult from './blogpost/blogpost-previews/blogpost-search-result';
import ErrorPage from './error-page';


import config from '../config.js';

import '../css/search-results.css';



class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            blogposts: null
        }
    }

    componentDidMount() {
        this.getAndUpdateSearchResults();
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            console.log(error.message)
            return (
                <div className="searchResults">
                    <ErrorPage error={error.message} />
                    Note: currently search only works on hashtags. Try searching for 'tech'
                </div>
            );
        } else if (!isLoaded) {
            return <LoadingIcon />;
        }
        return (
            <div className="searchResults">
                {this.state.blogposts.map(function(blogpost, index, blogposts) {
                    return <BlogPostSearchResult key={ blogpost.postID } blogpost={ blogpost } />
                })}
            </div>
        );
    }

    getAndUpdateSearchResults() {
        if (window.location.pathname.startsWith("/search/tags/")) {
            var tags = window.location.pathname.split('/').pop();
            fetch(config.api.domain + "/posts/tags/?tags=" + tags)
            .then(res => {
                if (res.status === 404) {
                    return Promise.reject({message: "404: blogpost not found"});
                }
                return res.json();
            })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        blogposts: result
                    });
                    document.title = "Search Results"
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
    }
}

export default SearchPage;