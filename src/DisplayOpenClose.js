const DisplayOpenClose = (data) => {
    const { summaries } = data
    // const open = summaries.open
    // const close = summaries.close

    // SEE WHAT DATA WE HAVE
    console.log(summaries)

    // // Error check
    // if (!summaries || summaries.length === 0) return <p>No response, sorry</p>;
    
    // return (summaries) => (
    //     <ul>
    //       <h2 className='list-head'>{props.symbol} Open/Close for [DATE]</h2>
    //       {summaries.map((summary) => {
    //         return (
    //             <>
    //                 <li key={summary.id} className='list'>
    //                     {/* This will need to be modified, because we are sending the entire response now */}
    //                 <span className='summary-open'>Daily open: <b>{summary.open}</b></span>
    //                 <span className='summary-close'>Daily close: <b>{summary.close}</b></span>
    //                 </li>
    //                 <div id="result"></div>
    //             </>
    //         );
    //       })}
    //     </ul>
    // );
    
}

export default DisplayOpenClose;