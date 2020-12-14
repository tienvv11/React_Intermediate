import React, {useState, useEffect, useContext, createContext} from 'react'

const UserContext = createContext([{
    firstName: 'Bob',
    lastName: 'Bobberson',
    suffix: 2,
    email: 'Bobberson@gmail.com'
},
(obj)=>obj]);

const LevelFour = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            <h5>{user.firstName} {user.lastName} {user.email}</h5>
            <h2>{user.suffix}</h2>
            <button onClick={()=>{
                setUser(Object.assign({}, user, {suffix: user.suffix +1}))
            }}>Increment</button>
        </div>
    )
}

const LevelThree = () => {
    
    return(
    <div>
        <h2>LevelThree</h2>
        <LevelFour />
        
    </div>)
}

const LevelTwo = () => {
    return (
        <div>
            <h2>Two Level</h2>
            <LevelThree />
        </div>
    )
}

const ContextComponent = () =>{
    const UserState = useState({
        firstName: 'lan',
        lastName: 'BAnh',
        suffix: 1,
        email: 'Bobberson@gmail.com'
    });
    return (
        <UserContext.Provider value={UserState}>
            <h1>First level</h1>
            <LevelTwo />
        </UserContext.Provider>
    )
}

export default ContextComponent;
