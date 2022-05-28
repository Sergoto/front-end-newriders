import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Square from '../components/Square'
import axios from 'axios';


function MoodMap() {

  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [method, setMethod] = useState("");
  const [date, setDate] = useState("Pick a Square to Start");
  const [mood, setmood ] = useState("");
  const [note, setNote ] = useState("");
  const [newgoal, setNewgoal ] = useState("");

  const [moodfill, setmoodfill ] = useState("");
  const [notefill, setnotefill ] = useState("");
  const [squares, setSquares ] = useState([]);

  function getToday(){
  axios.get('http://localhost:8001/today').then((res)=>{
    console.log(res.data.length)
    if(res.data.length>0){
      setId(res.data[0]._id)
      setNote(res.data[0].note)
      setNewgoal(res.data[0].goalForToday)
      setMethod("put")
      setmood(res.data[0].mood)
      setmoodfill(res.data[0].mood)
      setnotefill(res.data[0].note)
    console.log(res.data[0].date)
    setDate(res.data[0].date)
    }
    else{
     setMethod("post")
    }
   })
  }

   function squareClick (date){
     let formDate = date.replaceAll('/', '-')
     console.log(formDate)
    axios.get('http://localhost:8001/date/'+formDate).then((res)=>{
      console.log(res.data.length)
      if(res.data.length>0){
        setId(res.data[0]._id)
        setMethod("put")
        setmood(res.data[0].mood)
        setNote(res.data[0].note)
        setmoodfill(res.data[0].mood)
        setnotefill(res.data[0].note)
      console.log(res.data[0].date)
      setDate(res.data[0].date)
      }
      else{
       setMethod("post")
       setId("")
       setmood("")
       setNote("")
       setmoodfill("")
       setnotefill("")
       
       setDate(date)
      }
     })

   }
 
 
   let handleSubmit = async (e) => {
     e.preventDefault();
     if(method == "post"){
     axios.post('http://localhost:8001/add', {
       mood: mood,
       date: date,
       note: note,
       goalForToday:newgoal


     })
     .then((response) => {
     
       console.log(response);


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
   
   }
   else{
 
     axios.put('http://localhost:8001/'+id, {
       mood: mood,
       note: note,
       goalForToday: newgoal
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
      getToday()
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

    function handleClick (e){
      e.preventDefault();

      let copy = e.target
      console.log(copy.id)
      squareClick(copy.id)

    }
    
function mapSquares(squares){

  let map = squares.map((square,index) => {
    
console.log(square.data)
   return <Square key={index} id={square.date.dateString}  onClick={handleClick} mood={square.data.mood} classname="gridBox" date={square.date} />
  })
return map
}
  

  
   
  return (
    <div id="mainCon">
      <div className='cards' >
        <h4>100 Day Mood Map</h4>
        <div id="gridContainer" >
          {mapSquares(squares)}
        </div>
      </div>
      <div className='cards'>
        <div style={{display:"flex", justifyContent:"center"}}>
        
          <h5>{date}</h5>
       
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <span>Mood Hex</span>
          <input
            type="text"
            value={mood}
            placeholder={moodfill}
            onChange={(e) => setmood(e.target.value)}
          /> 
            <br />
            <span>Notes:</span>
          <input
            type="text"
            value={note}
            placeholder={notefill}
            onChange={(e) => setNote(e.target.value)}
          /> 
          <br />
          <button type="submit">Create</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
    <>
  
       
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
