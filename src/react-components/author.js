import React from 'react';
import moment from 'moment';

import config from '../config.js';

import '../css/author.css';



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

export default AboutAuthor;
