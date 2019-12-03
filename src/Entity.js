import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Card, Flex } from 'rebass'
import join from 'url-join'
import { singular } from 'pluralize'
import { BASE_URL, WORKSPACE, API_KEY } from './constants'
import { parseJSON } from './utils'
import * as entities from './entities'
import SpeakerBar from './components/SpeakerBar'
import SortByTopic from './services/sortByTopic'

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
        .then(({ records , error}) => {
          if(records){
            setRecords(records)
            setLoading(false)
          } else {
            console.log(error.type);
          }
        })
    },
    [location.pathname],
  )

  const searchTopic = (topic) => {
    const arr = SortByTopic(topic, records);
    setRecords(arr);
  }

  let Entity = entities[singular(match.params.entity)]

  const renderBar = () => {
    const entity = singular(match.params.entity);
    if(entity === "talk"){
      return  <SpeakerBar searchTopic={searchTopic} />
    }
    return
  }

  const renderEntity = () => (
    records.map(record => (
      <Card
      key={record.id}
      fontSize={3}
      p={3}
      my={2}
      width={[ 1, 1, 2/3, 1/2 ]}
      borderRadius={5}
      boxShadow="0 2px 6px rgba(0, 0, 0, 0.20)"
      >
        <Entity {...record}/>
      </Card> ))
  );

  return loading || !Entity
  // leaving loading as a blank string for now until I work out how to return null for when the user is on speakerform or eventform 
    ? '' // 'loading
    : (
      <Fade bottom >
        <Flex
        alignItems="center"
        flexDirection="column"
        mt={[4, 5]}>
          {renderBar()}
          {renderEntity()}
        </Flex>
      </Fade>
  )
}

export default Entity
