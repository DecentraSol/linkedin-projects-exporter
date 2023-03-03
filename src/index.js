import express from 'express'
import linkedInExport from './linkedInExport.js'
import  bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 8000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/linkedin', (req, res) => {
	console.log(req)
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data))
    res.send("see log")
})

app.get('/test', (req, res) => {
    linkedInExport()
    res.send('Hello World Test!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
