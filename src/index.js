import express from 'express'
import linkedInExport from './linkedInExport.js'

const app = express()
const port = process.env.PORT || 8000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    linkedInExport()
    res.send('Hello World Test!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})