import React, { useState, useEffect, useContext } from 'react'

const Verify = props => {
  useEffect(() => {
    fetch(`/.netlify/functions/index/verify${props.location.search}`)
      .then(res => res.json)
      .then(function(res) {
        console.log(res)
      })
  }, [])

  return <p>Please wait while we verify you!</p>
}

export default Verify
