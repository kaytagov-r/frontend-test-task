import React from "react";

export default function CheckboxFreeActivities(props) {
    return(
        <label>
            <span style={{marginRight: '10px'}}>Show only free</span>
            <input id='freeActivityCheckbox' type='checkbox' onChange={props.onChange}/>
        </label>
    )
}