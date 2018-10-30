let forward = (body, callback) =>
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

exports.handler = (event, context, callback) => {
  forward({ test: 123 }, callback)
}
