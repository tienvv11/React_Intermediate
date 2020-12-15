import React, {useReducer} from 'react'

const limitRgb = num => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const Reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT_R': 
            return Object.assign({}, state, {r: limitRgb(state.r + step)});
        case 'INCREMENT_G':
            return Object.assign({}, state, {g: limitRgb(state.g + step)});
        case 'INCREMENT_B':
            return Object.assign({}, state, {b: limitRgb(state.b + step)});
        case 'DECREMENT_R': 
            return Object.assign({}, state, {r: limitRgb(state.r - step)});
        case 'DECREMENT_G':
            return Object.assign({}, state, {g: limitRgb(state.g - step)});
        case 'DECREMENT_B':
            return Object.assign({}, state, {b: limitRgb(state.b - step)});
        default:
            return state;
    }
}

const ReducerComponent = () => {
    const [{r,g,b}, dispatch] = useReducer(Reducer, {r: 0, g: 0, b: 0});

    return (
        <>
            <button onClick={() => dispatch({type: 'INCREMENT_R'})}>+</button>
            <span>R</span>
            <button onClick={() => dispatch({type: 'DECREMENT_R'})}>-</button>
            <br/>
            <button onClick={() => dispatch({type: 'INCREMENT_G'})}>+</button>
            <span>G</span>
            <button onClick={() => dispatch({type: 'DECREMENT_G'})}>-</button>
            <br/>
            <button onClick={() => dispatch({type: 'INCREMENT_B'})}>+</button>
            <span>B</span>
            <button onClick={() => dispatch({type: 'DECREMENT_B'})}>-</button>
            <div>
                <h1 style={{color: `rgb(${r} ${g} ${b})`}}>UseReducer Example</h1>
            </div>
        </>
    )
}

export default ReducerComponent;
