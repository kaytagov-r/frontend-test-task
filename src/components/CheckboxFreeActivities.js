import React from "react";

export default function CheckboxFreeActivities(props) {
    return(
        <label>
            <span style={{marginRight: '10px'}}>Show only free</span>
            <input type='checkbox' checked={props.checkbox && 'checked'} />
        </label>
    )
}