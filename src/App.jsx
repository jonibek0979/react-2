import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [count , setCount] = useState(0)
  return (
    <>
    <div className={count % 2 == 0 ? 'lightt' : 'darkk'}>
      <h1>app</h1>
      <Header data={count}/>
    </div>
      <div className='div__btn'>
      <button onClick={() =>  count < 10 ? setCount(count+1): setCount(10) }>add</button>
      <button onClick={() => count >= 1 ? setCount(count-1): setCount(0) }>remove</button>
      </div>
    </>
  );
}

export default App;
