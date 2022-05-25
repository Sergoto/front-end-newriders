import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Square from '../components/Square'


function MoodMap() {
  let squares;

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

  let dates = getPast100Days()

  const [mood, setmood] = useState([]);
    useEffect(() => {
      let url = "http://localhost:8001/";
      fetch(url) //<-- the url as a string
    // Wait for the response and convert it to json
    .then(res => res.json())
    // Take the json and do something with it
    .then(json => {
      setmood(json)
      
      // the json parameter holds the json data
      // so here's where you will need to
      // use the setBirds method put the json into state
    })
    // Catch and log any errors to the console
    .catch(console.error);
    }, []);

    function mapSquares(mood){
      
     
      squares = dates.map((date, index) =>{
let result 
        for(let w=0;w<mood.length;w++){
          if(date.dateString == mood[w].date){
            console.log(mood[w])
            result = < Square key={index} mood={mood[w].mood} classname="gridBox" date={date}/>
          }
          else{
            result =  < Square key={index} classname="gridBox" date={date}/>
          }
        }
    
  
        return result
      })
    }
    mapSquares(mood)

  

  
   
  return (
    <div className='cards' id="gridContainer">
      {squares}
    </div>
  );
}

export default MoodMap
