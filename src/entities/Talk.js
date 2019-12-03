import React from 'react'
import Speaker from './Speaker'

export default ({ fields }) => (
  <>
    <h5>{fields['Speaker']}</h5>
    <p>{fields['Description']}</p>
    <Speaker fields={fields} />
  </>
)
