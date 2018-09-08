import React from 'react';
import ReactLoading from 'react-loading';


import '../css/loading-icon.css';

class LoadingIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loadingIcon">
                <ReactLoading type="spin" color="#000000" height={100} width={100} />
            </div>
        );
    }
}

export default LoadingIcon;