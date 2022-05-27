import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function refreshPage() {
  window.location.reload(true);
}

function Entry() {
  const [mood, setMood] = useState("")
  const [message, setMessage] = useState("");
  

  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8001/add', {
      mood: mood
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    }).then(()=>{
      refreshPage()
    })
  
  }
  
  return  <div>

<form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mood}
          placeholder="mood"
          onChange={(e) => setMood(e.target.value)}
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
  </div>;
}

export default Entry