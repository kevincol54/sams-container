var response = require('palmettoflow-event').response //https://github.com/twilson63/palmettoflow-event/blob/master/index.js#L4

module.exports = function(ee) {
  // create a palmetto listener for the nick container route and pass a handler function(event)
  ee.on('/callSamContainer/put', function (event) {
    console.log('we received a call to the Sam container')
    console.log('payload the Same container recieved: ', event.object)
    // emit a send event with the payload being the response we build with the helper method we required in at the top of the file
    ee.emit('send', response(event, { message: 'Hello Sam, thanks for coming to container world today'}))
  })
}
