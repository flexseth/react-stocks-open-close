import React from 'react' 
const DisplayOpenClose = (props) => {
    const { summaries } = props
    // const open = summaries.open
    // const close = summaries.close

    // Error check
    if (!summaries || summaries.length === 0) return <p>No response, sorry</p>;
    // return (
    // {summaries.map( (summary) => {
    //     return (
    //         <li key={summary.id} className='list'>
    //             <span className='summary-open'>Daily open: <b>{summary.open}</b></span>
    //             <span className='summary-close'>Daily close: <b>{summary.close}</b></span>
    //         </li>
    //         )
    //     })}
    // )

    return (summaries) => (
        <ul>
          <h2 className='list-head'>{props.ticker} Open/Close for [DATE]</h2>
          {summaries.map((summary) => {
            return (
                <>
                    <li key={summary.id} className='list'>
                    <span className='summary-open'>Daily open: <b>{summary.open}</b></span>
                    <span className='summary-close'>Daily close: <b>{summary.close}</b></span>
                    </li>
                    <div id="result"></div>
                </>
            );
          })}
        </ul>
    );
    
}

export default DisplayOpenClose;