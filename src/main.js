const app = express()
const port = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/add', (req, res) => {
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    res.send('' + (a + b))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
  