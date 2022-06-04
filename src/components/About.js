import React from 'react'
function About() {
  return (
    <>
      <div className="aboutBody cards">
        <h1 className="aboutHeader">About Mood Map</h1>
        <h2 className="aboutH2">What Mood Map Does</h2>
        <p>
          Mood Map is an app designed to help you overcome mental health
          challenges.
        </p>
        <br />
        <br />
        <div className="row">
          <h1>The Team</h1>
          <br />
          <br />
          <div>
            <h3>Project and Managing Lead</h3>
            <h4>Google Guru + German efficiency.</h4>
            <p className="column">
              Hi my name is Bradley Hazel and I'll solve whatever problem I'm
              working on no matter what, no matter how.
            </p>
            <iframe
              className="column"
              src="https://media-exp1.licdn.com/dms/image/C5603AQHeJlRiJvr-SA/profile-displayphoto-shrink_200_200/0/1517601044735?e=1659571200&v=beta&t=j3k-vJwWx2AGRuCMjp6HZPeoWov2b8daeQBzgVZXODE"
              height="400"
              width="400"
            ></iframe>
          </div>
          <h2>Software and Development Lead</h2>
          <h4>Jack of many trades + ideas generator.</h4>
          <p className="column">
            Hi my name is Ross Warren and I'll build you the most beautiful
            table you'll ever see.
          </p>
          <iframe
            className="column"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQH4HoWQ9FauFw/profile-displayphoto-shrink_200_200/0/1556395971491?e=1659571200&v=beta&t=6E9wfPpK-uBYVGDvczeoxwFgMCllgo5jpcfacazYB1Y"
            height="400"
            width="400"
          ></iframe>
        </div>
        <div>
          <h2>Web and Design Lead</h2>
          <h4>Aesthetics + Design</h4>
          <p className="column">
            Hi my name is David Lin and I'm your hype guy.
          </p>
          <iframe
            className="column"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEcBXbGb8KGsQ/profile-displayphoto-shrink_200_200/0/1648768302944?e=1659571200&v=beta&t=a18HPh0l-eS1UGk0V9-aG6gIHnicWMeX8gy9KKiM-SI"
            height="400"
            width="400"
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default About