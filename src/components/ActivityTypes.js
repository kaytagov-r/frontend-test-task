import React from "react";
import ActivityTypesItem from "./ActivityTypesItem";

export default function ActivityTypes() {
    let activityTypes = [
        {id: 1, value: 'education', title: 'Education'},
        {id: 2, value: 'recreational', title: 'Recreational'},
        {id: 3, value: 'social', title: 'Social'},
        {id: 4, value: 'diy', title: 'Diy'},
        {id: 5, value: 'charity', title: 'Charity'},
        {id: 6, value: 'cooking', title: 'Cooking'},
        {id: 7, value: 'relaxation', title: 'Relaxation'},
        {id: 8, value: 'music', title: 'Music'},
        {id: 9, value: 'busywork', title: 'Busywork'},
    ];

    return (
        <label>
            <span style={{marginRight: '10px'}}>Select activity type</span>
            <select>
                {activityTypes.map(activityType => {
                    return <ActivityTypesItem type={activityType} key={activityType.id}/>
                })}
            </select>
        </label>
    )
}