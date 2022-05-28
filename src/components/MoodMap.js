import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Square from '../components/Square'
import axios from 'axios';


function MoodMap() {

  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [method, setMethod] = useState("");
  const [date, setDate] = useState("");
  const [mood, setmood ] = useState([]);
  const [squares, setSquares ] = useState([]);

  axios.get('http://localhost:8001/today').then((res)=>{
    console.log(res.data.length)
    if(res.data.length>0){
      setId(res.data[0]._id)
      setMethod("put")
    console.log(res.data[0]._id)
    }
    else{
     setMethod("post")
    }
   })
 
 
   let handleSubmit = async (e) => {
     e.preventDefault();
     if(method == "post"){
     axios.post('http://localhost:8001/add', {
       mood: mood
     })
     .then((response) => {
     
       console.log(response);
     }, (error) => {
       console.log(error);
     }).then(()=>{
      console.log("done")
     })
   
   }
   else{
 
     axios.put('http://localhost:8001/'+id, {
       mood: mood
     })
     .then((response) => {
      console.log(squares)
      

       console.log(response.data);
       let newSquares = squares;
       for(let w =0;w<squares.length;w++){
         if(response.data.date == squares[w].date.dateString){
          
           newSquares[w].data = response.data
         }
       }

       setthismood(newSquares)

       var currentToCompare = newSquares.slice();
       currentToCompare.push("");
       currentToCompare.pop();
       setSquares(currentToCompare);


       


     }, (error) => {
       console.log(error);
     }).then(()=>{
       console.log("done")
     })
 
   }}
 

  function getPast100Days(){
    let dates = []
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

function useEf (){
  
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
  const [thismood, setthismood] = useState(false)

    useEffect(() => {
      let url = "http://localhost:8001/";
      fetch(url) //<-- the url as a string
    // Wait for the response and convert it to json
    .then(res => res.json())
    // Take the json and do something with it
    .then(json => {
      setthismood(json)
      let newsquares = combineDateData(dates, json)
      setSquares(newsquares)
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
    <div id="mainCon">
      <div className='cards' >
        <h3>100 Day Mood Map</h3>
        <div id="gridContainer" >
          {mapSquares(squares)}
        </div>
      </div>
      <div className='cards'>
        <button>←</button>
        <div>{date}</div>
        <button>→</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={mood}
            placeholder="mood"
            onChange={(e) => setmood(e.target.value)}
          /> 
          <button type="submit">Create</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
    <>
       <div>
        Today's Entry
       </div>
      <div>
        Overall Mood
        </div>
        <div>
      Notes:
    </div>
    <div>
      Today's Goals
    </div>
    <div>
      Goals for Tomorrow
    </div>
    </>
  </div>
    </div>
  );
}

export default MoodMap
