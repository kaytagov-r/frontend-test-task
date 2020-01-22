import React from 'react';
import ActivityTypes from "./components/ActivityTypes";
import ButtonSubmitFind from "./components/ButtonSubmitFind";
import CheckboxFreeActivities from "./components/CheckboxFreeActivities";
import ActivityList from "./components/ActivityList";

function App() {

    const [checkbox, setCheckbox] = React.useState(false);

    const activityList = [
        {
            activity: 'Learn Express.js',
            accessibility: 0.25,
            type: 'education',
            participants: 1,
            price: 0.1,
            link: 'https://expressjs.com/',
            key: 3943506
        },
        {
            activity: 'Learn Express.js2',
            accessibility: 0.25,
            type: 'education',
            participants: 1,
            price: 0.1,
            link: 'https://expressjs.com2/',
            key: 39435062
        },
    ];



    return (
        <div className="App">
            <p>Find activity</p>
            <ActivityTypes/>
            <CheckboxFreeActivities/>
            <ButtonSubmitFind checkbox={checkbox}/>
            <ActivityList activityList={activityList}/>
        </div>
    );
}

export default App;
