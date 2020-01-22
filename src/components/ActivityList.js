import React from "react";
import ActivityListItem from "./ActivityListItem";

export default function ActivityList(props) {
    return (
        <div className='activity-list'>
            {props.activityList.map(activity => {
                return <ActivityListItem activity={activity} key={activity.key}/>
            })}
        </div>
    )
}