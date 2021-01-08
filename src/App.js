import './App.css';
import React, {useState} from 'react'

import ReactDOM from 'react-dom';


function App() {

  const apiKey='sqfI8sNznOJ1HZHHps3UaMcoeguYwkZ2'
  let [symbol, setSymbol] = useState("Stock Symbol");
  let [open, setOpen] = useState(null);
  let [close, setClose] = useState(null);

  // 
  // @params: closingDate, symbol, apiKey
  // @returns: endpoint (API url) as string 
  function buildEndpoint(symbol, closingDate, apiKey) {
    return  `https://api.polygon.io/v1/open-close/${symbol}/2021-01-05?apiKey=${apiKey}`
    // returns endPoint
    //https://api.polygon.io/v1/open-close/AAPL/2020-10-14?apiKey=sqfI8sNznOJ1HZHHps3UaMcoeguYwkZ2
  }

  // get yesterday's date
  const closingDate = new Date();
  // it gives yesterday date
  closingDate.setDate(closingDate.getDate()-1);

  function DailyOpenClose() {
    let dailyOpenClose = (
      <p id="response">
        ${symbol} stock opened at ${open} and closed at ${close} on . DATE
      </p>
    )
    return dailyOpenClose
  }

  function handleChange(e) {
    setSymbol( (e.target.value).toUpperCase() )
    console.log("Handled change..." + {symbol})
  }

  // handle submission
  function handleClick(e) {
    e.preventDefault();

    let endPoint = buildEndpoint(symbol, closingDate, apiKey)
    // fetch stock data based on user given stock symbol
    return fetch(endPoint) 
    .then(response => response.json())
    .then(data => { 

      // testing
      // console.log("data: "+ data)
      // console.log("endPoint: " + endPoint)
 
      let returnElement = (
        <>
          <p>Daily Open: {data.open}</p>
          <p>Daily Close: {data.close}</p>
        </>
      )

      ReactDOM.render(
        returnElement,
        document.getElementById('daily-open-close')
      );
      
      
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
      
    </> // end UI
  )
  
  return UI
}

export default App;