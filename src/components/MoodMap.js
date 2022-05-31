import { Grid } from '@mui/material';
import { Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Square from '../components/Square'
import axios from 'axios';

let today 

function getTodaysDate() {
  let today = new Date();
  let year = today.getFullYear();
  year = year.toString();
  let month = today.getMonth();
  month = month + 1;
  month = month.toString();
  let day = today.getDate();
  day = day.toString();
 
  let date = `${month}/${day}/${year}`;
  return date;
}

function MoodMap() {

  
const [moodselection, setMoodselection ] = useState("");

  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [method, setMethod] = useState("");
  const [date, setDate] = useState("Pick a Square to Start");
  const [mood, setmood ] = useState("");
  const [note, setNote ] = useState("");
  const [newgoal, setNewgoal ] = useState("");

  const [newgoalfill,setnewgoalfill] = useState("");

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

      setMoodselection(res.data[0].mood)
      document.getElementById(res.data[0].mood).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";

    console.log(res.data[0].date)
    setDate(res.data[0].date)
    }
    else{
      today = getTodaysDate()
     setMethod("post")
     setDate(today)
    }
   })
  }

   function squareClick (date, e){
     let formDate = date.replaceAll('/', '-')
    axios.get('http://localhost:8001/date/'+formDate).then((res)=>{
     console.log(res.data.length)
      if(res.data.length>0){
        setId(res.data[0]._id)
        setMethod("put")
        setmood(res.data[0].mood)
        setNote(res.data[0].note)
        setmoodfill(res.data[0].mood)
        setnotefill(res.data[0].note)

        
        setMoodselection(res.data[0].mood)
        document.getElementById(res.data[0].mood).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";
        console.log(e.target)
        

        try{
      document.getElementById(moodselection).style.boxShadow = "";
       setMoodselection(res.data[0].mood)
        
       document.getElementById(res.data[0].mood).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";
        }
        catch(e){

        }

      
     
  
      setDate(res.data[0].date)
      }
      else{
       setMethod("post")
       
       try{
        document.getElementById(moodselection).style.boxShadow = "";
         setMoodselection("")
         }
          catch(e){
  
          }
       setId("")
       setmood("")
       setNote("")
       setNewgoal("")
       setmoodfill("")
       setnotefill("")
       
       setDate(date)
      }
     })

   }
 

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
      squareClick(copy.id,e)

    }
    
function mapSquares(squares){

  let map = squares.map((square,index) => {
    
   return <Square key={index} id={square.date.dateString}  onClick={handleClick} mood={square.data.mood} classname="gridBox" date={square.date} />
  })
return map
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
  
    let newSquares = squares;
    for(let w =0;w<squares.length;w++){
      if(response.data.date == squares[w].date.dateString){
       
        newSquares[w].data = response.data
      }
    }

    setthismood(newSquares)
    setId(response.data._id)
    setMethod("put")

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

function deleteDay (){
  axios.delete('http://localhost:8001/'+id)
  .then((response) => {
   

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
    




    setMethod("post")
       
    try{
     document.getElementById(moodselection).style.boxShadow = "";
      setMoodselection("")
      }
       catch(e){

       }
    setId("")
    setmood("")
    setNote("")
    setNewgoal("")
    setmoodfill("")
    setnotefill("")
    
    setDate(date)
    


  }, (error) => {
    console.log(error);
  }).then(()=>{
    console.log("done")
  })

}


function selectMood(e){
  setmood(e.target.id)

  if(!moodselection){
  document.getElementById(e.target.id).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";
  setMoodselection(e.target.id)
  }
  else{
    document.getElementById(moodselection).style.boxShadow = "";
    document.getElementById(e.target.id).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";
    setMoodselection(e.target.id)
  }

  
}
  
   
  return (
    <div id="mainCon">
      <div className='cards' >
        <h4>100 Day Mood Map</h4>
        <Divider />
        <br/>
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
          <span>Mood</span>
          <div style={{display:"flex"}}>
            <div className='hex' onClick={selectMood} id="ff6961" style={{backgroundColor:"#ff6961"}}></div>
            <div className='hex' onClick={selectMood} id="ffb347" style={{backgroundColor:"#ffb347"}}></div>
            <div className='hex' onClick={selectMood} id="fdfd96" style={{backgroundColor:"#fdfd96"}}></div>
            <div className='hex' onClick={selectMood} id="c6f1c6" style={{backgroundColor:"#c6f1c6"}}></div>
            <div className='hex' onClick={selectMood} id="58d558" style={{backgroundColor:"#58d558"}}></div>
          </div>
          <br />
         <Divider/>
            <br />
          <span>Notes:</span>
          <br/>
          <input
            type="text"
            value={note}
            placeholder={notefill}
            onChange={(e) => setNote(e.target.value)}
          /> 
          <br />
          <span>Goals for today:</span>
          <br/>
          <input
            type="text"
            value={newgoal}
            placeholder={newgoalfill}
            onChange={(e) => setNewgoal(e.target.value)}
          /> 
          <br/>
          <br/>
          <Divider/>
          <br />
          <button type="submit">Create</button>
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
    <>
  
    <div>
      Did you complete your goal?
    </div>
    <button onClick={deleteDay}>Delete</button>
    </>
  </div>
    </div>
  );
}

export default MoodMap
