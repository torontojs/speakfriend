let forward = ({ callback, body }) =>
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

exports.handler = (event, context, callback) =>
  forward({ callback, body: { test: 123 } })
