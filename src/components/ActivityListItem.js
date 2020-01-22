import React from "react";
import styled from "styled-components";

export default function ActivityListItem(props) {

    const ActivityListItem = styled.div`
       border: 1px solid; 
       margin-bottom: 5px;
    `;

    return (
        <ActivityListItem>
            <p className='title'>
                <a target='_blank' href={props.activity.link}>{props.activity.activity}</a>
            </p>
            <p className='participants'>{props.activity.participants}</p>
            <p className='price'>{props.activity.price}</p>
        </ActivityListItem>
    )
}