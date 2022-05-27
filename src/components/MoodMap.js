import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Square from '../components/Square'


function MoodMap() {
 

  function getPast100Days(){
    let dates = []
    let today = new Date(Date.now());
    for(let i=0;i<100;i++){
      let multiplyer = i*86400000
      let date = new Date(Date.now()-multiplyer)
      let year = date.getFullYear();
      year = year.toString();
      let month = date.getMonth();
      month = month + 1;
      month = month.toString();
      let day = date.getDate();
      day = day.toString();
      let dateString = `${month}/${day}/${year}`;
      dates.push({dateString})
    }
    return dates
  }



  function combineDateData (dates, data){
    let combinedArr = []
    // looping through all the dates
    for(let i=0;i<dates.length;i++){
      // one entry per date = 100
     let entry = {};
     // add date to the entry object
     entry.date = dates[i]
     // looping through the data object
     let dayData
     for(let w=0;w<data.length;w++){
      if(dates[i].dateString == data[w].date){
        entry.data = data[w]
        dayData = data[w]
      }
     }
     if(dayData == undefined){
       dayData = {mood:null}
     }
     entry.data = dayData
     combinedArr.push(entry)
    
    }
    console.log(combinedArr)
 
    return combinedArr
  }

  let dates = getPast100Days()

  const [mood, setmood ] = useState([]);
  const [squares, setsquares ] = useState([]);
    useEffect(() => {
      let url = "http://localhost:8001/";
      fetch(url) //<-- the url as a string
    // Wait for the response and convert it to json
    .then(res => res.json())
    // Take the json and do something with it
    .then(json => {
      setmood(json)
      let newsquares = combineDateData(dates, json)
      setsquares(newsquares)
      // the json parameter holds the json data
      // so here's where you will need to
      // use the setBirds method put the json into state
    })
    // Catch and log any errors to the console
    .catch(console.error);
    }, []);

    
function mapSquares(squares){

  let map = squares.map((square,index) => {
    
console.log(square.data.mood)
   return <Square key={index} mood={square.data.mood} classname="gridBox" date={square.date} />
  })
return map
}
  

  
   
  return (
    <div className='cards' id="gridContainer">
      {mapSquares(squares)}
    </div>
  );
}

export default MoodMap
