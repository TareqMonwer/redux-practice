import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux Tutorial</h1>
        <h2 style={{ fontWeight: 'bold', color: 'maroon' }}>
          Result is: {counter}

          <button
            onClick={() => dispatch(increment(10))}>
            +
          </button>
          <button
            onClick={() => dispatch(decrement())}>-</button>
        </h2>

        {isLoggedIn ? <h3>Message for logged in users.</h3>:''}
      </header>
    </div>
  );
}

export default App;
