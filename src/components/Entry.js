import React from 'react'

function Entry() {
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
  </div>;
}

export default Entry