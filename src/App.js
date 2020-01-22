import React from 'react';
import ActivityTypes from "./components/ActivityTypes";
import ButtonSubmitFind from "./components/ButtonSubmitFind";
import CheckboxFreeActivities from "./components/CheckboxFreeActivities";
import ActivityList from "./components/ActivityList";
import styled from "styled-components";

function App() {

    const [checkbox, setCheckbox] = React.useState(false);

    const AppContainer = styled.div`
        margin: 0 auto;
        width: 400px;
    `;

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
        <AppContainer>
            <p>Find activity</p>
            <ActivityTypes/> <br/>
            <CheckboxFreeActivities/> <br/>
            <ButtonSubmitFind checkbox={checkbox}/>
            <p></p>
            <ActivityList activityList={activityList}/>
        </AppContainer>
    );
}

export default App;
