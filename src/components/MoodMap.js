import { Checkbox, Button, TextField } from '@mui/material';
import { Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Square from '../components/Square'
import axios from 'axios';
import AppContext from "./AppContext";

import { useContext } from "react";

axios.defaults.withCredentials = true;

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

  const myContext = useContext(AppContext);


  const [checked, setChecked] = useState(false);

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

  const [buttonMessage, setbuttonMessage ] = useState("");
  

  function getToday(){
  axios.get('https://aqueous-citadel-97605.herokuapp.com/today').then((res)=>{
    console.log(res.data.user)
    if(res.data.length>0){
      setId(res.data[0]._id)
      setNote(res.data[0].note)
      setNewgoal(res.data[0].goalForToday)
      setnewgoalfill(res.data[0].goalForToday)
      setMethod("put")
      setmood(res.data[0].mood)
      setmoodfill(res.data[0].mood)
      setnotefill(res.data[0].note)
      setChecked(res.data[0].goalDone)
      setbuttonMessage("Update Entry")

      setMoodselection(res.data[0].mood)
      document.getElementById(res.data[0].mood).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";

    console.log(res.data[0].date)
    setDate(res.data[0].date)
    }
    else{
      today = getTodaysDate()
     setMethod("post")
     setbuttonMessage("Create Entry")
     setDate(today)
    }
   })
  }

   function squareClick (date, e){
     let formDate = date.replaceAll('/', '-')
    axios.get('https://aqueous-citadel-97605.herokuapp.com/date/'+formDate).then((res)=>{
     console.log(res.data.length)
      if(res.data.length>0){
        setId(res.data[0]._id)
        setMethod("put")
        setmood(res.data[0].mood)
        setNote(res.data[0].note)
        setmoodfill(res.data[0].mood)
        setnotefill(res.data[0].note)
        setnewgoalfill(res.data[0].goalForToday)
        setNewgoal(res.data[0].goalForToday)
        setChecked(res.data[0].goalDone)
        setbuttonMessage("Update Entry")

        
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
       setbuttonMessage("Create Entry")
       
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
       setnewgoalfill("")
       setChecked(false)
       
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
      let url = "https://aqueous-citadel-97605.herokuapp.com/";
      fetch(url, {'credentials': 'include'},) //<-- the url as a string
    // Wait for the response and convert it to json
    .then(res => res.json())
    // Take the json and do something with it
    .then(json => {
      console.log(json)
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
  axios.post('https://aqueous-citadel-97605.herokuapp.com/add', {
    user: myContext.user,
    mood: mood,
    date: date,
    note: note,
    goalForToday:newgoal,
    goalDone:checked
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
    setbuttonMessage("Update Entry")

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

  axios.put('https://aqueous-citadel-97605.herokuapp.com/'+id, {
    mood: mood,
    note: note,
    goalForToday: newgoal,
    goalForToday:newgoal,
    goalDone:checked

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
  axios.delete('https://aqueous-citadel-97605.herokuapp.com/'+id)
  .then((response) => {
   

    let url = "https://aqueous-citadel-97605.herokuapp.com/";
      fetch(url,{'credentials': 'include'}) //<-- the url as a string
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
    setnewgoalfill("")
    setChecked(false)
    setbuttonMessage("Create Entry")
    
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

const handleChange = () => {
  setChecked(!checked);
};

function showDelete(method) {
  if(method == "put"){
    return(<Button  variant='outlined'
    sx={{ color: 'red', backgroundColor: 'white', borderColor: 'purple' }} onClick={deleteDay}>Delete</Button>)
  }
  else{
    return (<></>)
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
        
          <h4>{date}</h4>
       
        </div>
        
        <Divider  style={{marginBottom:"10px"}}/>
        <form onSubmit={handleSubmit}>
          <span>Mood</span>
          <div style={{display:"flex"}}>
            <div className='hex' onClick={selectMood} id="ff6961" style={{backgroundColor:"#ff6961"}}></div>
            <div className='hex' onClick={selectMood} id="ffb347" style={{backgroundColor:"#ffb347"}}></div>
            <div className='hex' onClick={selectMood} id="fdfd96" style={{backgroundColor:"#fdfd96"}}></div>
            <div className='hex' onClick={selectMood} id="c6f1c6" style={{backgroundColor:"#c6f1c6"}}></div>
            <div className='hex' onClick={selectMood} id="58d558" style={{backgroundColor:"#58d558"}}></div>
          </div>
         
          <br/>

          <TextField
          id="outlined-multiline-static"
          style = {{width: "425px"}}
          label="Notes"
          multiline
          rows={2}

          value={note}
          placeholder={notefill}
          onChange={(e) => setNote(e.target.value)}
        />
          
          <br />
          <br />

          <TextField
          id="outlined-multiline-static"
          label="Goals for today"
          style = {{width: "425px"}}
          multiline
          rows={2}

          value={newgoal}
          placeholder={newgoalfill}
          onChange={(e) => setNewgoal(e.target.value)}
        />

          <br/>
          <br />
          <label>
    Did you complete the goal?
     
        <Checkbox
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
     
      </label>

          <br />
          <br />
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <Button type="submit"  variant='outlined'
  sx={{ color: 'black', backgroundColor: 'white', borderColor: 'purple' }}>{buttonMessage}</Button>
          
 {showDelete(method)}
 </div>
        </form>
 
  </div>
    </div>
  );
}

export default MoodMap