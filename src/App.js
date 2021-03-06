import React from 'react';
import ActivityTypes from "./components/ActivityTypes";
import ButtonSubmitFind from "./components/ButtonSubmitFind";
import CheckboxFreeActivities from "./components/CheckboxFreeActivities";
import ActivityList from "./components/ActivityList";
import styled from "styled-components";
import Loader from "./components/Loader";

function App() {

    const apiUrl = 'http://www.boredapi.com/api/activity/';

    const [checkbox, setCheckbox] = React.useState(false);
    const [selectValue, setSelectValue] = React.useState('education');
    const [activityList, setActivityList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {findActivity(apiUrl)}, []);

    function findActivity(url) {
        setLoading(true);

        fetch(url)
            .then(response => response.json())
            .then(activityList => {
                setActivityList(
                    activityList.error === undefined
                        ? [activityList]
                        : []
                );
                setLoading(false);
            });
    }

    const AppContainer = styled.div`
        margin: 0 auto;
        width: 400px;
    `;

    const changeActivityTypesSelect = (e) => {
        setSelectValue(e.target.value);
    };

    const changeFreeCheckbox = (e) =>{
        setCheckbox(e.target.checked);
    };

    const submitFindActivity = (e) => {

        const url = (apiUrl + '?type=' + selectValue) + (checkbox ? '&price=0.0' : '');

        findActivity(url);
    };

    return (
        <AppContainer>

            <p>Find activity</p>

            <ActivityTypes defaultValue={selectValue} onChange={changeActivityTypesSelect}/> <br/>

            <CheckboxFreeActivities checkbox={checkbox} onChange={changeFreeCheckbox}/> <br/>

            <ButtonSubmitFind onClick={submitFindActivity}/>

            <p></p>

            {
                activityList.length
                    ? (<ActivityList activityList={activityList}/>)
                    : (loading ? null : 'not found activity..')
            }

            {loading && <Loader/>}

        </AppContainer>
    );
}

export default App;
