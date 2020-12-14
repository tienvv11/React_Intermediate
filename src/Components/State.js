import React, {useState} from 'react'

const State = () => {
    const [isColor, setIsColor] = useState(true);
    return (
        <h2 onClick={()=>setIsColor(!isColor)} style={{color: isColor ? 'green' : 'red'}}>This is State</h2>
    )
}

export default State;
