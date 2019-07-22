import React, { useState, useEffect } from 'react'
import { Card } from 'rebass'
import join from 'url-join'
import { singular } from 'pluralize'
import { BASE_URL, WORKSPACE, API_KEY } from './constants'
import { parseJSON } from './utils'
import * as entities from './entities'

let Entity = ({ match, location }) => {
  let [records, setRecords] = useState([])
  let [loading, setLoading] = useState(false)

  useEffect(
    () => {
      setLoading(true)
      fetch(join(BASE_URL, WORKSPACE, match.params.entity), {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
        .then(parseJSON)
        .then(({ records }) => {
          if (records === undefined) {
            throw Error
          }
          setRecords(records)
          setLoading(false)
        })
    },
    [location.pathname],
  )

  let Entity = entities[singular(match.params.entity)]

  return loading || !Entity
    ? 'loading'
    : records.map(record => (
        <Card
          key={record.id}
          fontSize={3}
          fontWeight="bold"
          width={[1, 1, 1 / 2]}
          p={5}
          my={5}
          borderRadius={8}
          boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
        >
          <Entity {...record} />
        </Card>
      ))
}

export default Entity
