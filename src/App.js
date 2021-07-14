import Keypad from './components/Keypad'
import Results from './components/Results'
import {useState,useEffect}  from 'react'
import './App.css';

function App() {
  const [currentValue,setCurrentValue] = useState('')
  const [results,setResults] = useState('')

  useEffect(() => {
    setCurrentValue(results)

  }, [results])

  const calculate = () => {
    const total = eval(currentValue)
    setResults(total)
  }


  const changeNumberSign = () => setCurrentValue((num) => num * -1)

  const reset = () =>{
    setCurrentValue('')
  }

  const onClick = keyValue => { 
    switch(keyValue) {
      case '=':
      calculate()
          break;
      case 'AC':
        reset()
          break;
      case '+/-':
          changeNumberSign(currentValue)
        break;
      default:
        setCurrentValue(() => currentValue + keyValue)
          break;
  }

  }
  return (
    <div style={{ height: '100%', display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
      <div className="App">
   <Results value={currentValue}/>
   <Keypad onClick={onClick}/>
    </div>
    </div>

  );
}

export default App;
