import React from "react";
import AddEmployee from './AddEmployee/AddEmployee';
import DeleteEmployee from "./DeleteEmployee/DeleteEmployee";
import EditEmployee from './EditEmployee/EditEmployee';

function Requests(props) {

    switch(props.request) {
        case("POST"):
            return <AddEmployee onAddEmployee={props.onAddEmployee} skills={props.skills}/> ;
        case("PUT"):
            return <EditEmployee onEditEmployee={props.onEditEmployee} changeId={props.changeId} skills={props.skills}/>;
        case("DELETE"):
            return <DeleteEmployee onDeleteEmployee={props.onDeleteEmployee} changeId={props.changeId} />;
        default:
            return null;
    }
};

export default Requests;