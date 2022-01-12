import './App.css';
import {getObjById} from '../utils';
import {Employees} from '../Employees/Employees';
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
      request: "POST"
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
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
  editEmployee(id) {
    const prevObj = getObjById(this.state.employees, id);
    const ObjIndex = this.state.employees.indexOf(prevObj);
    
    const newEmployees = {...this.state.employees};
    newEmployees[ObjIndex] = prevObj;

    this.setState({employees: newEmployees});
  }



  render() {
    return (
      <div className="App">
        <h1 className="App-logo">Employees</h1>
        <Requests request="POST"
        onAddEmployee={this.addEmployee} skills={this.state.skills} // for AddEmployee or POST
        />
        <button>Create new employee</button>
        <Employees employees={this.state.employees} handleEdit={this.editEmployee}/>
      </div>
    );
  }
}