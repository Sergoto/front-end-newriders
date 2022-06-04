import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
function About() {
  return (
<div>
    <section className='aboutContainer'>
      <div classname="xContainer">
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h3 className='aboutHeading'>About Mood Map</h3>
            <div class="underline mx-auto"></div>
              <p>Mood Map is an app designed to help you keep track of your mental health. Using Mood Map, keep track of your mental health by recording your mood each day by color that
                paints a beautiful picture of your mood over 100 days. Mood Map also features a space for writing journal entries and importantly you can set an action plan to keep you on track.
                We also offer a variety of resources from serious to silly. Using Mood Map your information will be secure!</p>
          </div>
        </div>
      </div>
    </section>
{/* Our Team */}
<section className='border-top light'>
      <div classname="xContainer">
        <div className='row'>
          <div className='col-md-12 mb-4 text-center'>
            <h3 className='aboutHeading' style={{paddingTop:"25px"}}>Our Team</h3>
            <div class="underline mx-auto"></div>
        </div>

       <div style={{display:"flex",justifyContent: "space-evenly"}}>
         <div style={{display:"flex", flexDirection:"column"}}>
          <img  style={{width:"200px"}} src="https://media-exp1.licdn.com/dms/image/C4E03AQEcBXbGb8KGsQ/profile-displayphoto-shrink_200_200/0/1648768302944?e=1659571200&v=beta&t=a18HPh0l-eS1UGk0V9-aG6gIHnicWMeX8gy9KKiM-SI" className='border-bottom image' alt='Ross'/>
    
          <h6>David Lin</h6>
          <p>
            Simply the best!
          </p>
          </div>
        
          <div style={{display:"flex", flexDirection:"column"}}>
          <img style={{width:"200px"}} src="https://media-exp1.licdn.com/dms/image/C5603AQHeJlRiJvr-SA/profile-displayphoto-shrink_200_200/0/1517601044735?e=1659571200&v=beta&t=j3k-vJwWx2AGRuCMjp6HZPeoWov2b8daeQBzgVZXODE" className=' border-bottom' alt='Ross'/>
    
          <h6>Bradley Hazel</h6>
          <p>
            Simply the best!
          </p>
          </div>
    
          <div style={{display:"flex", flexDirection:"column"}}>
          <img style={{width:"200px"}} src="https://media-exp1.licdn.com/dms/image/C4E03AQH4HoWQ9FauFw/profile-displayphoto-shrink_200_200/0/1556395971491?e=1659571200&v=beta&t=6E9wfPpK-uBYVGDvczeoxwFgMCllgo5jpcfacazYB1Y" className='border-bottom' alt='Ross'/>
          
          <h6>Ross Warren</h6>
          <p>
            Simply the best!
          </p>
          </div>
      </div>
      </div>
      </div>
    </section>
</div>
  )
}
export default About