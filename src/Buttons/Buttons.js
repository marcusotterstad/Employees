import React from 'react';

export class Buttons extends React.Component {

    handleRequests = (event) => {
        event.preventDefault();
        this.props.setRequest("POST");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRequests}>Add an employee</button>
            </div>
        )
    }
}