import React from "react";

export default function ActivityTypesItem(props) {
    return (
        <option value={props.type.value}>{props.type.title}</option>
    )
}