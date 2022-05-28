import React, { useState, useEffect } from 'react';

function Square(props) {
  const [mood, setmood ] = useState([]);

  let backgroundColor = (props.mood ? `#${props.mood}` : null)
  console.log(backgroundColor)
  const mystyle = {
    color: backgroundColor,
    width:"10px",
    background: backgroundColor,
    padding: "10px",
    border:"1px solid"
  };
  return (
    <div style={mystyle} onClick={props.onClick} id={props.id} date={props.date.dateString}>

    </div>
  )
}

export default Square