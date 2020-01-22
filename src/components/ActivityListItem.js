import React from "react";
import styled from "styled-components";

export default function ActivityListItem(props) {

    const ActivityListItem = styled.div`
       border: 1px solid; 
       margin-bottom: 5px;
       padding: 10px;
    `;

    return (
        <ActivityListItem>
            <p className='title'>
                Activity: <a target='_blank' href={props.activity.link}>{props.activity.activity}</a>
            </p>
            <p className='participants'>
                Participants: {props.activity.participants}
            </p>
            <p className='price'>
                Price: {props.activity.price}
            </p>
        </ActivityListItem>
    )
}