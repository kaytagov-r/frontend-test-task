import React from "react";

export default function CheckboxFreeActivities(props) {
    return(
        <input type='checkbox' checked={props.checkbox && 'checked'} />
    )
}