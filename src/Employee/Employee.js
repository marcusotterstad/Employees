import './Employee.css';
import React from 'react';

export class Employee extends React.Component {

    handleEditEmployee = () => {
        this.props.handleEdit(this.props.employeeId);
    }

    render() {
        let skillArr = this.props.skills.map(skill => <div className="skill">{skill}</div>);
        return (<div className="box">
            <div className="employeeName">{this.props.name}</div>
            <button onClick={this.handleEditEmployee}>edit employee</button>
            <div className="skills">{skillArr}</div>
        </div>);
    }
}