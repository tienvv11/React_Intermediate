import React, {useRef, useState} from 'react'

const RefComponent =  () => {
    
    const [stateNumber, setStateNumber] = useState(0);
    const numRef = useRef(0);

    const incrementAndDelayLogging = () => {
        setStateNumber(stateNumber+1);
        numRef.current++;
        setTimeout(function(){
            alert(`stateNumber: ${stateNumber} ::: Ref: ${numRef.current}`);
        },1000)
    }

    return (
        <div>
            <button onClick={incrementAndDelayLogging}>Increment</button>
            <h2>Ref: {numRef.current}</h2>
            <h2>StateNumber: {stateNumber}</h2>            
        </div>
    )
}
export default RefComponent;
