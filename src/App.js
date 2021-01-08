import './App.css';
import React, {useState} from 'react'
import ReactDOM from 'react-dom';

function App() {

  const apiKey='YOUR API KEY HERE'
  let [symbol, setSymbol] = useState("Stock Symbol")
  
  // @params: systemDate, current Date object
  // @returns: dateFragment, string representation of date YYYY-MM-DD
  function formatDate(systemDate) {
    let year = systemDate.getFullYear()
    let month = systemDate.getMonth() + 1
    let day = systemDate.getDate() - 1
    // Current format: 2021-1-7      
    
    if ( month < 10 ) { month = '0' + month } // add a 0
    if ( day < 10 ) { day = '0' + day } // add a 0
    // corrected format: 2021-01-07           
     
    let dateFragment = year + '-' + month + '-' + day // YYYY-MM-DD
    
    return dateFragment
  }

  // @params: symbol, string, formatted endpoint
  // @params: dateFragment, string, 
  //          numerical representation of yesterday (YYYY-MM-DD)
  // @params: apiKey, string, Polygon.io API key 
  // @returns: endpoint (API url) as string 
  function buildEndpoint(symbol, dateFragment, apiKey) {
    return  `https://api.polygon.io/v1/open-close/${symbol}/${dateFragment}?apiKey=${apiKey}`
  }
 
  function handleChange(e) {
    setSymbol( (e.target.value).toUpperCase() )
  }

  // handle submission
  function handleClick(e) {
    e.preventDefault();

    // create API endpoint based on date and user input
    let systemDate = new Date()  
    let dateFragment = formatDate(systemDate)
    let endPoint = buildEndpoint(symbol, dateFragment, apiKey)

    // fetch stock data based on user given stock symbol
    // and system supplied date of yesterday
    return fetch(endPoint) 
    .then(response => response.json())
    .then(data => { 

      let dailyOpenClose = (
        <p id="response">
          {symbol} stock opened at ${data.open} and closed at ${data.close} on {dateFragment}
        </p>
      )
      ReactDOM.render(
        dailyOpenClose,
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