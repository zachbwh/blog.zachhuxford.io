import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Handlebars from 'handlebars';
import Disqus from 'disqus-react';
import config from './config.js';
import './w3.css';
import './index.css';

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
        fetch(config.api.domain + "/posts/1-HOW-TO-Install-HTK-on-Ubuntu-17.04")
            .then(res => res.json())
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

    render() {
        const { error, isLoaded, blogpost } = this.state;
        if (error) {
            console.log(error.message)
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            var disqusConfig = {
                url: config.disqus.domain + "/" + blogpost.postID + "-" + blogpost.urlTitle + "/",
                identfier: blogpost.disqusID,
                title: blogpost.title
            }
            var disqusShortname = "zachhuxford-io"
            debugger;
            return (
                <div className="blogpost">
                    <div className="w3-content">
                        <h1 className="title">{blogpost.title}</h1>
                        <p className="date">{this.renderPostDate()}</p>
                        <div dangerouslySetInnerHTML={{__html: blogpost.body}}/>
                        <AboutAuthor author={blogpost.author} />
                        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                    </div>
                </div>
            );
        }
    }

    renderPostDate() {
        var date = moment.unix(this.state.blogpost.date);
        return date.format('LL');
    }
}

class AboutAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: props.author,
            isLoaded: false,
            aboutAuthor: null
        }
    }

    componentDidMount() {
        fetch(config.api.domain + "/authors/" + this.state.author.authorID)
            .then(res => res.json())
            .then(
                (result) => {

                    // Calculate and set age
                    var splitDate = result.DOB.split("/");
                    result.age = moment().diff(moment([splitDate[2], splitDate[1], splitDate[0]]), 'years');
                    this.setState({
                        isLoaded: true,
                        aboutAuthor: result
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

    render () {
        const { error, isLoaded, aboutAuthor } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="aboutAuthor">
                    <h1 className="title">About the Author</h1>
                    <div className="w3-third w3-center w3-padding-64">
                        <img src={aboutAuthor.displayPhoto}/>
                    </div>
                    <ul className="aboutAuthor w3-twothird w3-padding-64">
                        <li>{aboutAuthor.name}</li>
                        <li>{aboutAuthor.age}</li>
                        <div dangerouslySetInnerHTML={{__html: aboutAuthor.body}} />
                    </ul>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <BlogPost />,
    document.getElementById('root')
);