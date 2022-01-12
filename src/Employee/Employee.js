import './Employee.css';
import React from 'react';

export class Employee extends React.Component {

    onHandleEdit = (event) => {
        event.preventDefault();
        this.props.handleChangeId(this.props.employeeId);
        event.preventDefault();
        this.props.setRequest("PUT");
    }


    render() {
        let skillArr = this.props.skills.map(skill => <div className="skill">{skill}</div>);
        return (<div className="box">
            <div className="employeeName">#{this.props.employeeId}: {this.props.name}</div>
            <button onClick={this.onHandleEdit}>edit employee</button>
            <div className="skills">{skillArr}</div>
        </div>);
    }
}