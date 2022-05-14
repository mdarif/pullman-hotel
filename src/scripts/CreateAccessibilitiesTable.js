var AWS = require('aws-sdk')

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack)
  // credentials not loaded
  else {
    console.log('Access key:', AWS.config.credentials.accessKeyId)
  }
})

AWS.config.update({
  region: 'us-east-1'
})

var dynamodb = new AWS.DynamoDB()

var params = {
  TableName: 'Accessibilities',
  KeySchema: [
    // Partition Key
    { AttributeName: 'name', KeyType: 'HASH' }
  ],
  AttributeDefinitions: [{ AttributeName: 'name', AttributeType: 'S' }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
}

dynamodb.createTable(params, function (err, data) {
  if (err)
    console.error('Unable to create table: ', JSON.stringify(err, null, 2))
  else
    console.log(
      'Created table with description: ',
      JSON.stringify(data, null, 2)
    )
})
