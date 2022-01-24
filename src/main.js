const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add', (req, res) => {
    let a = parseInt(req.body.a)
    let b = parseInt(req.body.b)
    res.send('' + (a + b))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
  