import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight, faArrowLeft);

class NavigateButtons extends React.Component {
    render() {
        return (
            <div className="navigator-buttons">
                <button onClick={this.navigatePrevPost} className="navigate-left-button" disabled={!this.props.prevPost}><FontAwesomeIcon icon="arrow-left" size="1x" />  Previous Post</button>
                <button onClick={this.navigateNextPost} className="navigate-right-button" disabled={!this.props.nextPost}>Next Post  <FontAwesomeIcon icon="arrow-right" size="1x" /></button>
            </div>
        );
    }

    navigatePrevPost = (event) => {
        this.props.changePost(this.props.prevPost);
    }
    navigateNextPost = (event) => {
        this.props.changePost(this.props.nextPost);
    }
}

export default NavigateButtons;