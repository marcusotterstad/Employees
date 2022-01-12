import React from 'react';
import './DeleteEmployee.css';

function DeleteEmployee(props) {

    const handleDelete = (event) => {
        event.preventDefault();
        props.onDeleteEmployee();
        props.handleSetRequest("");
    }

    return (
        <div className="deleteEmployee">
            <h2>Delete Employee #{props.changeId}?</h2>
            <button onClick={handleDelete}>Yes</button>
        </div>
    )
};

export default DeleteEmployee;
