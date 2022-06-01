import React from 'react'

function About() {
  return (
    <>
      <div className='aboutBody'>
      <h1 className='aboutHeader'>About Mood Map</h1>
<h2 className='aboutH2'>What Mood Map Does</h2>
<p>Mood Map is an app designed to help you overcome mental health challenges.</p>
   <div className='row'>
     <h3>The team</h3>
     <iframe className='column' src = "https://elegentthemes.com" 
   height="400" width="400"></iframe>
   <p className='column'>Hi my name is Bradley Hazel</p>
   </div>
   <div>
     <iframe className='column' src = "https://elegentthemes.com" 
   height="400" width="400"></iframe>
   <p className='column'>Hi my name is David Lin</p>
   </div>
   <div>
     <iframe className='column' src = "https://elegentthemes.com" 
   height="400" width="400"></iframe>
   <p className='column'>Hi my name is Ross Warren</p>
   </div>
   </div>
    </>
  )
}

export default About