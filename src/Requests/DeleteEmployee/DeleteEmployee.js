import React from 'react'

export default function DeleteEmployee(props) {
    const handleDelete = (event) => {
        event.preventDefault();
        
    }

    return (
        <div className="deleteEmployee">
            <h2>Delete Employee?</h2>
            <button onClick={}>Yes</button>
        </div>
    )
}

