import React from 'react';

import '../css/error-page.css';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: props.error
        }
    }

    render() {
        return (
            <div className="errorPage">
                <p>Error: { this.state.errorMessage }</p>
                <h3>
                    <a href="/">Take me Home!</a>
                </h3>
            </div>
        );
    }
}

export default ErrorPage;