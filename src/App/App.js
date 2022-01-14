import './App.css';
import {getObjById} from '../utils';
import {Employees} from '../Employees/Employees';
import {Buttons} from '../Buttons/Buttons';
import Requests from '../Requests/Requests';
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {id: 1, name: "Marcus Otterstad", skills: ["api", "react", "python", "javascript", "html"]},
        {id: 2, name: "Christine Otterstad", skills: ["api", "react", "python", "java", "html"]},
        {id: 3, name: "Alf Otterstad", skills: ["api", "react", "java", "backend", "databases"]}
      ],
      skills: ["api", "react", "javascript", "html", "css", "express/node", "git"],
      request: "",
      changeId: 0
    };
    this.setChangeId = this.setChangeId.bind(this);
    this.setRequest = this.setRequest.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  setRequest = (rea) => {
    this.setState({request: rea});
  }

  setChangeId = (id) => {
    this.setState({changeId: id});
  }

  // POST
  addEmployee(employee) {
    let newEmployee = {id: (this.state.employees.length+1), name: employee.name, skills: []};
    for (const [key, value] of Object.entries(employee)) {
      if(value === true) {
        newEmployee.skills.push(key);
      }
    }
    this.setState({employees: [...this.state.employees, newEmployee]});
  }

  // PUT
  editEmployee(employee) {
    let newEmployee = {id: (this.state.changeId), name: employee.name, skills: []};
    for (const [key, value] of Object.entries(employee)) {
      if(value === true) {
        newEmployee.skills.push(key);
      }
    }
    
    const prevObj = getObjById(this.state.employees, this.state.changeId);
    const ObjIndex = this.state.employees.indexOf(prevObj);
    
    const newEmployees = this.state.employees;
    newEmployees[ObjIndex] = newEmployee;

    this.setState({employees: newEmployees});
  }

  // DELETE
  deleteEmployee() {
    const newEmployees = this.state.employees;
    newEmployees.splice(this.state.changeId-1, 1);
    for (let i = 0; i < newEmployees.length; i++) {
      newEmployees[i].id = i+1;
    }

    this.setState({employees: newEmployees});
  }



  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-logo">Manage <b>Employees</b></h1>
          <Buttons setRequest={this.setRequest}/>
        </header>


        <Requests request={this.state.request} handleSetRequest={this.setRequest}
        onDeleteEmployee={this.deleteEmployee} // for deleteEmployee or DELETE
        onEditEmployee={this.editEmployee} changeId={this.state.changeId} // for editEmployee or PUT
        onAddEmployee={this.addEmployee} skills={this.state.skills} // for AddEmployee or POST
        />
        <Employees employees={this.state.employees} handleChangeId={this.setChangeId} setRequest={this.setRequest}/>
      </div>
    );
  }
}