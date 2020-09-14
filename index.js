// index.js
// Import the fastify framework
const fastify = require('fastify')
const app = fastify()
// Set a GET route "/google.com"
app.get('/g.', function (request, res) {
    res.redirect("https://google.com")
})
// Set a GET route "/"
app.get('/', function (request, reply) {
    reply.send("Welcome to my fastify Page")
})
// Start the server
app.listen(3000, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})