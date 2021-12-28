import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const reducer = (state= 0, action) => {
  switch (action.type) {
    case "inc":      
      return state + 1;
    case "dec":      
      return state - 1;
    case "set":      
      return action.payload;  
    default:
      return state;
  }
}

function App() {
  const [valor, setValor] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const set = () => {
    dispatch({type:"set", payload: valor})
    setValor('')
  } 

  return (
    <div>
      <p>
        Contador: {state}
      </p>
      <button
        onClick={() => dispatch({type:"inc"})}
      >
        Incrementar
      </button>
      <button
        onClick={() => dispatch({type:"dec"})}
      >
        Decrementar
      </button>
      <button
        onClick={set}
      >
        Set
      </button>
      <input value={valor} onChange={e => setValor(Number(e.target.value))} />
      
    </div>
  );
}

export default App;
