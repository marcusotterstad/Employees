import React from "react";
import './Employees.css';
import {Employee} from '../Employee/Employee';

export class Employees extends React.Component {

    render() {
        let employeeList = this.props.employees.map(employee => <Employee name={employee.name} skills={employee.skills} handleChangeId={this.props.handleChangeId} setRequest={this.props.setRequest} employeeId={employee.id}/>);

        return (<table className="employees">
            <tr style={{color: "white", backgroundColor: "darkgray"}}>
                <th>Name</th>
                <th>Skills</th>
                <th>Buttons</th>
            </tr>
            {employeeList}
        </table>);
    }
}