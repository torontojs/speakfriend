var Airtable = require('airtable');
const config = require('../config/airtable')
const detectDuplicate = require('./detectDuplicate')

var base = new Airtable({ apiKey: config.API_KEY }).base(config.WORKSPACE)

const isUser = async (email) => {

  let existingUsers = [];
   return base('users')
  .select({
    fields: ['Email'],
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function(record) {
        existingUsers.push(record.fields['Email'])
      })
      fetchNextPage()
    })
    .then((result) => {
      return detectDuplicate(existingUsers, email)
    })
}

module.exports = isUser;