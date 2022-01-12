import React, {useState} from "react";
import AddEmployee from '../AddEmployee/AddEmployee';

function Requests(props) {

    if(props.request === "POST") {
        return <AddEmployee onAddEmployee={props.onAddEmployee} skills={props.skills}/> ;
    }
    return <div></div>
}
export default Requests;