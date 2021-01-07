// API docs
// https://polygon.io/docs/get_v1_open-close__stocksTicker___date__anchor
// -------------------------
import './App.css';
import React, {useState} from 'react'
// import DisplayOpenClose from './DisplayOpenClose'

function App() {

  const apiKey='sqfI8sNznOJ1HZHHps3UaMcoeguYwkZ2'
  let [symbol, setSymbol] = useState(null);
  let [open, setOpen] = useState(null);
  let [close, setClose] = useState(null);
  let [dailyOpenClose, setDailyOpenClose] = useState(null)


  // 
  // @params: closingDate, symbol, apiKey
  // @returns: endpoint (API url) as string 
  function buildEndpoint(symbol, closingDate, apiKey) {
    return  `https://api.polygon.io/v1/open-close/${symbol}/2021-01-05?apiKey=${apiKey}`
    //return endPoint
    //https://api.polygon.io/v1/open-close/AAPL/2020-10-14?apiKey=sqfI8sNznOJ1HZHHps3UaMcoeguYwkZ2
  }

  // look for yesterday's open/close
  const closingDate = new Date();
  // it gives yesterday date
  closingDate.setDate(closingDate.getDate()-1);

  function handleChange(e) {
    setSymbol( (e.target.value).toUpperCase() )
    console.log("Handled change..." + {symbol})
  }

  // handle submission
  function handleClick(e) {
    e.preventDefault();


    let endPoint = buildEndpoint(symbol, closingDate, apiKey)
    // fetch stock data based on user given stock symbol
    fetch(endPoint) 
    .then(response => response.json())
    .then(data => { 

      // testing
      console.log(data)
      console.log(endPoint)
      setOpen(data.open)
      setClose(data.close)
      console.log("open: " + data.open)
      console.log("close: " + data.close)

      dailyOpenClose = setDailyOpenClose(`
      <p 
        id="response">
          ${symbol} stock opened at ${open} and closed at ${close} on . DATE
      </p>`
      )
    }) // end fetch and parsing
  }

  // build user input
  let UI = (
    <>
      <input 
        placeholder={symbol} 
        onBlur={handleChange}>
        </input>
      <button 
        onClick={handleClick}>
          Search Open/Close
      </button>
      
      {/*  create element with response */}
      React.createElement()
      <p 
        id="response">
          {symbol} stock opened at {open} and closed at {close} on .
      </p>
      {/* {dailyOpenClose} */}
    </>
  )

  return UI
}
export default App;
