import React from "react";

export default function CheckboxFreeActivities(props) {
    return(
        <label>
            <span style={{marginRight: '10px'}}>Show only free</span>
            <input defaultChecked={props.checkbox} id='freeActivityCheckbox' type='checkbox' onChange={props.onChange}/>
        </label>
    )
}