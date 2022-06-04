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
     <iframe className='column' src = "https://media-exp1.licdn.com/dms/image/C4E03AQH4HoWQ9FauFw/profile-displayphoto-shrink_200_200/0/1556395971491?e=1659571200&v=beta&t=6E9wfPpK-uBYVGDvczeoxwFgMCllgo5jpcfacazYB1Y"
   height="400" width="400"></iframe>
    <p className='column'>Hi my name is Ross Warren</p>
   </div>
   <div>
     <iframe className='column' src = "https://media-exp1.licdn.com/dms/image/C4E03AQEcBXbGb8KGsQ/profile-displayphoto-shrink_200_200/0/1648768302944?e=1659571200&v=beta&t=a18HPh0l-eS1UGk0V9-aG6gIHnicWMeX8gy9KKiM-SI"
   height="400" width="400"></iframe>
   <p className='column'>Hi my name is David Lin</p>
   </div>
   <div>
     <iframe className='column' src = "https://media-exp1.licdn.com/dms/image/C5603AQHeJlRiJvr-SA/profile-displayphoto-shrink_200_200/0/1517601044735?e=1659571200&v=beta&t=j3k-vJwWx2AGRuCMjp6HZPeoWov2b8daeQBzgVZXODE"
   height="400" width="400"></iframe>
   <p className='column'>Hi my name is Bradley Hazel</p>
  
   </div>
   </div>
    </>
  )
}
export default About