import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export function TimerChallenge({ title, targetTime}) {
    const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000);
    const timer = useRef();
    const dialog = useRef();
    const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime *1000;
    if(timerRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset(){
        setTimerRemaining(targetTime * 1000);
    }
    function handleStarted(){
        timer.current = setInterval(() => {
            setTimerRemaining(prevState => prevState - 10)
        }, 10)
    }
    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }
    return (
    <>
        <ResultModal
            ref = {dialog}
            targetTime={targetTime}
            remainingTime={timerRemaining}
            onReset={handleReset}
        />
        <section className={'challenge'}>
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}

            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStarted}>
                    {timerIsActive ? 'Stop ' : 'Start '}Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running' : 'Timer inactive'}
            </p>
        </section>
    </>
    )
}