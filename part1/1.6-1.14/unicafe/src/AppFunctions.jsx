import { useState } from 'react'

export const AppFunctions = () => {

    const [all, setAll] = useState(0);
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
  
    const handleFeedback = (e) => {
        e.preventDefault();

        switch (e.target.value) {
            case "good":
                setAll(good + neutral + bad + 1);
                setGood(good + 1);
                break;
            case "neutral":
                setAll(good + neutral + bad + 1);
                setNeutral(neutral + 1);
                break;
            case "bad":
                setAll(good + neutral + bad + 1);
                setBad(bad + 1);
                break;
            case "all":
                setAll(good + neutral + bad);
                break;
            default:
                break;
        }
    }

    return {
        handleFeedback,
        all,
        good,
        neutral,  
        bad
    };
};