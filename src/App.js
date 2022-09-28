import { useState, useReducer } from 'react';
import './App.css';

const ACTIONS = {
    DECREMENT: 'decrement',
    INCREMENT: 'increment'
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        default:
            return state
    }

    return { count: state.count + 1 }
}

function App() {
    // Declare new state counter var
    const [state, dispatch] = useReducer(reducer, {count: 0})
    const [count, setCount] = useState(0)

    function decrement() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    function increment() {
        dispatch({ type: ACTIONS.INCREMENT })

    }

    return (
        <div className="count-wrapper">
            <button onClick={decrement}>-</button>
            <button>{state.count}</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default App;
