const app = express()
const port = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
