"use client"

import { useState } from "react";
import Counter from "./counter";

export default function CounterPage(){

    const [counter, setCounter] = useState(0);
    const [timeCheck, setCurrentTime] = useState("");

    const incrementCounter = () => {
        let currentCount = counter;
        setCounter(currentCount + 1);
        setCounter(currentCount + 1);
        setCounter(currentCount + 1);
        setCounter(currentCount + 1);
        setCounter(currentCount + 1);
        // setCurrentTime("current time");
        // counter = counter + 1; // this is wrong, do not do this
    }

    return (
        <main>
            {/* <p>{counter}</p>
            <button onClick={incrementCounter}>Increment Counter</button> */}
            <Counter curCount={counter} incFunc={incrementCounter} />
        </main>
    );
}