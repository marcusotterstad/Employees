import React from 'react';
import './Buttons.css';

export class Buttons extends React.Component {

    handleRequests = (event) => {
        event.preventDefault();
        this.props.setRequest("POST");
    }

    render() {
        return (
            <div>
                <button className="newEmployee" onClick={this.handleRequests}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> Add new employee</button>
            </div>
        )
    }
}