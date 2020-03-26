import React, { useState, useEffect, useContext } from 'react'

const Verify = props => {
  useEffect(() => {
    console.log(props)

    fetch(`/.netlify/functions/index/verify${props.location.search}`).then()
  }, [])

  return <p>Please wait while we verify you!</p>
}

export default Verify
