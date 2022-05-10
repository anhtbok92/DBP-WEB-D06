import React, {useReducer} from "react";

const logicCounterReducer = (state, action) => {
    console.log('state-current', state);
    console.log('action-current', action);
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            throw new Error();
    }
}
const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(logicCounterReducer, { counter: 0 });

  const Increase = () => {
      dispatch({ type: 'INCREASE' });
  }

  const Decrease = () => {
      dispatch({ type: 'DECREASE' });
  }

  return (
      <>
          <div>
              <h1>{state.counter}</h1>
          </div>
          <div>
              <button onClick={Increase}>Tang</button>
              <button onClick={Decrease}>Giam</button>
          </div>
      </>
  )
}

export default CounterWithReducer;