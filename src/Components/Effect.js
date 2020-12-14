import React, {useState, useEffect} from 'react'

const Effect = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const Timer = setTimeout(()=>setDate(new Date()),1000)
        return () => {
            clearTimeout(Timer);
        }
    }, [date]);
    return (
        <div>
            <h2>{date.toLocaleTimeString()}</h2>     
        </div>
    )
}
export default Effect;
