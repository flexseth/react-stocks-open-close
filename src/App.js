// API docs
// https://polygon.io/docs/get_v1_open-close__stocksTicker___date__anchor
// -------------------------
import './App.css';
import React, {useState} from 'react'
import DisplayOpenClose from './DisplayOpenClose'

attributes: {
  let ticker = 'AAPL'
}

function App() {

  const url = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=sqfI8sNznOJ1HZHHps3UaMcoeguYwkZ2'

  function handleClick(e) {
    e.preventDefault();

    fetch(url)
    .then(response => response.json())
    .then(data => { 
     console.log(data['results'][0]['o'])

    //  ReactDOM.render(
    //   <><li>Daily open was {open}</li> 
    //   <li>Daily close was {close}</li></>)



    }) // end fetch
  }
  const [ticker, setTicker] = useState('AAPL')
ß
  let UI = (
    <>
      <input placeholder={ticker} onChange={() => setTicker("JUICE")} name="ticker"></input>
      <button onClick={handleClick}>Search Open/Close</button>
      <DisplayOpenClose ticker={ticker}></DisplayOpenClose>
    </>
  )
  return UI
}
export default App;
