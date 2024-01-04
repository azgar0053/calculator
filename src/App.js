import { useState } from 'react';
import './App.css';
import Button from './button';

function App() {
  const [input, setInput]=useState('');
  const [result, setResult]=useState('')

  const handleClick=(val)=>{
    console.log(val)
    if(val==='='){
      if(input===''){
        setResult('Error')
      }else{
      try {
        setResult(eval(input).toString())
      } catch (error) {
        setResult(error)
      }
    }
    }else if(val === 'C'){
      setInput('');
      setResult('');
    }else{
      setInput((prev)=> prev +val)
    }
  }

  const calcBtn ={
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns : 'repeat(4, 80px)',
    gap: '10px',
    marginTop: '20px'

  }
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input style={{fontSize:'20px'}} value={input}/>
      <p>{result}</p>
      <div style={calcBtn}>
      <Button btnName={7} onClick={handleClick}/>
      <Button btnName={8} onClick={handleClick}/>
      <Button btnName={9} onClick={handleClick}/>
      <Button btnName={'+'} onClick={handleClick}/>
      <Button btnName={4} onClick={handleClick}/>
      <Button btnName={5} onClick={handleClick}/>
      <Button btnName={6} onClick={handleClick}/>
      <Button btnName={'-'} onClick={handleClick}/>
      <Button btnName={1} onClick={handleClick}/>
      <Button btnName={2} onClick={handleClick}/>
      <Button btnName={3} onClick={handleClick}/>
      <Button btnName={'*'} onClick={handleClick}/>
      <Button btnName={'C'} onClick={handleClick}/>
      <Button btnName={0} onClick={handleClick}/>
      <Button btnName={'='} onClick={handleClick}/>
      <Button btnName={'/'} onClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
