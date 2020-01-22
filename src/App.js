import React from 'react';
import ActivityTypes from "./components/ActivityTypes";
import ButtonSubmitFind from "./components/ButtonSubmitFind";
import CheckboxFreeActivities from "./components/CheckboxFreeActivities";
import ActivityList from "./components/ActivityList";
import styled from "styled-components";
import Loader from "./components/Loader";

function App() {

    const [checkbox, setCheckbox] = React.useState(false);
    const [activityList, setActivityList] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then(activityList => {
                setActivityList([activityList]);
                setLoading(false);
            });
    }, []);

    const AppContainer = styled.div`
        margin: 0 auto;
        width: 400px;
    `;

    const changeActivityTypesSelect = (e) => {
        console.log(e.target.value);
    };

    const changeFreeCheckbox = (e) =>{
        console.log(e.target.checked);
    };

    const submitFindActivity = (e) => {
        fetch('http://www.boredapi.com/api/activity/')
            .then(response => response.json())
            .then(activityList => {
                setActivityList([activityList]);
                setLoading(false);
            });
    };

    return (
        <AppContainer>

            <p>Find activity</p>

            <ActivityTypes onChange={changeActivityTypesSelect}/> <br/>

            <CheckboxFreeActivities onChange={changeFreeCheckbox}/> <br/>

            <ButtonSubmitFind onClick={submitFindActivity}/>

            <p></p>

            <ActivityList activityList={activityList}/>

            {loading && <Loader/>}

        </AppContainer>
    );
}

export default App;
