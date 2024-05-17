import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

const App = () => {
  // Using useSelector hook to extract the 'count' value from the Redux store state
  const count = useSelector(state => state.counter.count);
  // Hook to get the 'dispatch' function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;