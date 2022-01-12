import './App.css';
import {Employees} from '../Employees/Employees';
import AddEmployee from '../AddEmployee/AddEmployee';
import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {name: "Marcus Otterstad", skills: ["api", "react", "python", "javascript", "html"]},
        {name: "Christine Otterstad", skills: ["api", "react", "python", "java", "html"]},
        {name: "Alf Otterstad", skills: ["api", "react", "java", "backend", "databases"]}
      ],
      skills: ["api", "react", "javascript", "html", "css", "express/node", "git"]
    };
    this.addEmployee = this.addEmployee.bind(this);
  }

  addEmployee(employee) {
    console.log(employee);
    let newEmployee = {name: employee.name, skills: []};
    for (const [key, value] of Object.entries(employee)) {
      if(value === true) {
        newEmployee.skills.push(key);
      }
    }
    this.setState({employees: [...this.state.employees, newEmployee]});
  }



  render() {
    return (
      <div className="App">
        <h1>Employees</h1>
        <AddEmployee onAddEmployee={this.addEmployee} skills={this.state.skills}/>
        <Employees employees={this.state.employees} />
      </div>
    );
  }
}