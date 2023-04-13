import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, implementBySpecificCalue} from './redux/actions';

function App() {
  const dispatch =useDispatch()
  const displayValue = useSelector(state => state.displayValue)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          {displayValue}
         
        </a>
        <button  onClick={()=>{dispatch(decrement())}}>-</button>

        <button onClick={()=>{dispatch(implementBySpecificCalue(5))}}>increment by Five</button>
      </header>
    </div>
  );
}

export default App;
