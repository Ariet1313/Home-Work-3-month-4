import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState(number1 + number2);

  function plus() {
    setTotal(number1 + number2);
  }
  function minus() {
    setTotal(number1 - number2);
  }
  function delenie() {
    setTotal(number1 / number2);
  }
  function umnojenie() {
    setTotal(number1 * number2);
  }
  function vozvedenie() {
    setTotal(number1 ** number2);
  }
  function koren() {
    setTotal(Math.sqrt( number1));
  }
  

  return (
    <div className="App">
      

     
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
         
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
        
        />
     

      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={umnojenie}>:</button>
      <button onClick={delenie}>.</button>
      <button onClick={vozvedenie}>^</button>
      <button onClick={koren}>√</button>
      <h2>{total}</h2>
    </div>
  );
}

export default App;
