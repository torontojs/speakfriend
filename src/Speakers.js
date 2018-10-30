import React from 'react'
import { Card } from 'rebass'
import join from 'url-join'
import { BASE_URL, WORKSPACE, API_KEY } from './constants'
import { parseJSON } from './utils'

class Speakers extends React.Component {
  state = { records: [] }
  componentDidMount() {
    fetch(join(BASE_URL, WORKSPACE, 'Speakers'), {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then(parseJSON)
      .then(({ records }) => this.setState({ records }))
  }
  render() {
    return this.state.records.map(x => (
      <Card
        key={x.id}
        fontSize={3}
        fontWeight="bold"
        width={[1, 1, 1 / 2]}
        p={5}
        my={5}
        borderRadius={8}
        boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      >
        {x.fields['Full Name']}
      </Card>
    ))
  }
}

export default Speakers
