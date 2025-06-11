import React, { useState } from 'react'
import Joyride from 'react-joyride';

const steps = [
    {
        target: "#firstStep",
        content: "Lorem First Step npm notice Run npm install -g npm@11.4.1 to update! npm notice",
        disableBeacon: true,
    },
    {
        target: "#secondStep",
        content: "Lorem Second Step npm notice Run npm install -g npm@11.4.1 to update! npm notice",
        placement: "right",
        disableBeacon: true,
    },
    {
        target: "#thirdStep",
        content: "Lorem third Step npm notice Run npm install -g npm@11.4.1 to update! npm notice",
        placement: "left",
        disableBeacon: true,
    },
    {
        target: "#fourthStep",
        content: "Lorem fourth Step npm notice Run npm install -g npm@11.4.1 to update! npm notice",
        disableBeacon: true,
    }
]

const ToolTipStyle = {
    options: {
        // card ki css
    },
    buttonClose: {
        //  card ka close icon ko design kiya hai
    },
    buttonSkip: {
        // skip button design
    },
    buttonNext: {
        // next button ko design kren yahan
    },
    buttonBack: {
        // back button ko design kren yahan
    }
}

const JoyRideTour = () => {
    const [RunTour, setRunTour] = useState(true);
    
    const handleJoyRideText = (data) => {
        if (data.index === steps.length - 1) {
            const lastButton = document.querySelector("[data-test-id='button-primary']")
            if (lastButton) {
                lastButton.innerText = "Finish"
            }
        }
    }
    return (
        <div>
            <Joyride
                steps={steps}
                continuous={true} // continue chalega
                run={RunTour} // tour ko start karne kay liye
                showSkipButton={true} // card kay left side par skip ka button show hoga
                showProgress={true} // kitne tours hain next kay button me wo dikhengy
                styles={ToolTipStyle}
                callback={handleJoyRideText}
            />
            <h1 id='firstStep'>MS Office</h1>
            <br />
            <br />
            <h1 id='secondStep'>Web Designing</h1>
            <br />
            <br />
            <h1 id='thirdStep'>Mern Stack Development</h1>
            <br />
            <br />
            <h1 id='fourthStep'>Mobile App Development</h1>
            <br />
            <br />
        </div>
    )
}

export default JoyRideTour