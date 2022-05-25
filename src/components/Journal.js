import React, {useState} from 'react'
import MoodMap from './MoodMap'

function Journal() {
  return (
    <div className='journalEntry'>
        <span>First Journal Entry</span>
        <div className='jFooter'>
            <small>{dateString}</small>
        </div>
        </div>
  )
}

export default Journal