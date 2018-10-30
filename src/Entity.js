import React from 'react'
import { Card } from 'rebass'
import join from 'url-join'
import { singular } from 'pluralize'
import { BASE_URL, WORKSPACE, API_KEY } from './constants'
import { parseJSON } from './utils'
import * as entities from './entities'

class Entity extends React.Component {
  state = { records: [], loading: false }
  componentDidMount() {
    this.getRecords()
  }
  componentDidUpdate(next) {
    if (this.props.location.pathname !== next.location.pathname) {
      this.getRecords()
    }
  }
  getRecords = () => {
    this.setState({ loading: true })
    fetch(join(BASE_URL, WORKSPACE, this.props.match.params.entity), {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then(parseJSON)
      .then(({ records }) => this.setState({ records, loading: false }))
  }
  render() {
    let Entity = entities[singular(this.props.match.params.entity)]

    return this.state.loading || !Entity
      ? 'loading'
      : this.state.records.map(record => (
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
}

export default Entity
