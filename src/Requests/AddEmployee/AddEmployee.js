import React, {useState} from "react";
import './AddEmployee.css';

function AddEmployee(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if(props.skills.includes(event.target.className)) {
            setInputs(values => ({...values, [event.target.className]: true}));
            return;
        }
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddEmployee(inputs);
    }

    const inputSkills = props.skills.map(skill => <div>
        <label for={skill}>{skill}</label>
        <input 
            type="checkbox" 
            className={skill}
            name={skill}
            value={inputs[skill]}
            onChange={handleChange}
        />
    </div>);

  return (<div className="addEmployee">
    <h2>Add an employee</h2>
    <form onSubmit={handleSubmit}>
        <label>Enter your name:<br /></label>
        <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>
        <div className="checkBoxes">{inputSkills}</div>
        <input type="submit" />
    </form>
  </div>)
}

export default AddEmployee;