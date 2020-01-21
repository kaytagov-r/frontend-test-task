import React from 'react';
import ActivityTypes from "./components/ActivityTypes";
import ButtonSubmitFind from "./components/ButtonSubmitFind";
import CheckboxFreeActivities from "./components/CheckboxFreeActivities";

function App() {

    const [checkbox, setCheckbox] = React.useState(false);

    return (
        <div className="App">
            <p>Find activity</p>
            <ActivityTypes/>
            <CheckboxFreeActivities/>
            <ButtonSubmitFind checkbox={checkbox}/>
        </div>
    );
}

export default App;
