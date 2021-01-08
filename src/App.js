import './App.css';
import React, {useState} from 'react'
import ReactDOM from 'react-dom';

function App() {

  const apiKey='YOUR API KEY HERE'
  let [symbol, setSymbol] = useState("Stock Symbol")
  
  // @params: systemDate, current Date object
  // @returns: dateFragment, string (formatted)
  function formatDate(systemDate) {
    // Desired format:      Current format: 
    // 2021-01-07           2021-1-7
    let year = systemDate.getFullYear()
    let month = systemDate.getMonth() + 1
    if ( month < 10 ) { month = '0' + month } // add a 0
    let day = systemDate.getDate() - 1
    if ( day < 10 ) { day = '0' + day } // add a 0
    let dateFragment = year + '-' + month + '-' + day
    
    return dateFragment
  }

  // @params: closingDate, symbol, apiKey
  // @returns: endpoint (API url) as string 
  function buildEndpoint(symbol, dateFragment, apiKey) {
    console.log(dateFragment)
    // should return 2020-01-07

    return  `https://api.polygon.io/v1/open-close/${symbol}/${dateFragment}?apiKey=${apiKey}`
    // returns endPoint
    //https://api.polygon.io/v1/open-close/AAPL/2020-10-14?apiKey=sqfI8sNznOJ1HZHHps3UaMcoeguYwkZ2
  }
 
  function handleChange(e) {
    setSymbol( (e.target.value).toUpperCase() )
    console.log("Handled change..." + {symbol})
  }

  // handle submission
  function handleClick(e) {
    e.preventDefault();

    
    let systemDate = new Date()
    // this could be abstracted...
    
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