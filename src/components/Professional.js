import React from 'react'
import { Button } from '@mui/material';
const url="https://www.samhsa.gov/"
const urltwo="https://www.youtube.com/watch?v=vmgh_4YK6ew"
function Professional() {
  return (
    <>
    <div>
   <h1 className='animalHeader'>Where to Find Help</h1>
   <a href="https://www.samhsa.gov/" target="_blank">
   <Button>U.S. Department of Health & Human Services</Button>
   </a>
   <a href="https://www.google.com/search?q=therapist+near+me" target="_blank">
   <Button>Therapist near me</Button>
   </a>
    </div>
    </>
  )
}
export default Professional