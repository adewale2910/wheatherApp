
import React, { useState } from 'react'




const Adewale = () => {

  const shoot = () => {
    alert("Great Shot!");
  }
  return (
    <>
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    {/* <button onClick={() => shoot("Goal!")}>Take the shot!</button> */}
{/* <button onClick={shoot}> Take a shoot</button> */}
    </>
  )
}

export default Adewale