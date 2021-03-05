const AWS = require('aws-sdk')
const s3 = new AWS.S3()

//Code from: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html
exports.handler = function(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false //You can configure the runtime to send the response immediately
  s3.listBuckets(null, callback)
  setTimeout(function () {
    console.log('Timeout complete.')
  }, 5000)
}
