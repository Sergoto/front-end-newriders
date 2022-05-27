import React from 'react'
import { useState } from 'react';


function Entry() {
  const [mood, setMood] = useState("")
  const [message, setMessage] = useState("");
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    
  


      (async () => {
        const rawResponse = await fetch('http://localhost:8001/add', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({mood: mood})
        });
        const content = await rawResponse.json();
       
      
        console.log(content);
      })();


   
  };
      /* Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('http://localhost:8001/', requestOptions)
        .then(response => response.json())
       .then(data => this.setState({ postId: data.id })
      );
    */
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