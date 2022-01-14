import './Employee.css';
import React from 'react';

export class Employee extends React.Component {

    onHandleEdit = (event) => {
        event.preventDefault();
        this.props.handleChangeId(this.props.employeeId);
        event.preventDefault();
        this.props.setRequest("PUT");
    }

    onHandleDelete = (event) => {
        event.preventDefault();
        this.props.handleChangeId(this.props.employeeId);
        event.preventDefault();
        this.props.setRequest("DELETE");
    }


    render() {
        let skillArr = this.props.skills.map(skill => <div className="skill">{skill}</div>);
        return (<tr className="box">
            <td className="employeeName">#{this.props.employeeId}: {this.props.name}</td>
            <td className="skills">{skillArr}</td>
            <td>
            <button className="deleteButton" onClick={this.onHandleDelete}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg> Delete employee</button>
            <button className="editButton" onClick={this.onHandleEdit}><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg> Edit employee</button>
            </td>
        </tr>);
    }
}