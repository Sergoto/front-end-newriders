import React from 'react'

function Entry() {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('http://localhost:8001/', requestOptions)
        .then(response => response.json())
       .then(data => this.setState({ postId: data.id })
      );
  return (
    <div>Entry</div>
  )
}

export default Entry