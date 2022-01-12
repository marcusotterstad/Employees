import React from "react";
import './Employees.css';
import {Employee} from '../Employee/Employee';

export class Employees extends React.Component {

    render() {
        let employeeList = this.props.employees.map(employee => <Employee name={employee.name} skills={employee.skills} handleEdit={this.props.handleEdit} employeeId={employee.id}/>);

        return (<div className="employees">
            {employeeList}
        </div>);
    }
}