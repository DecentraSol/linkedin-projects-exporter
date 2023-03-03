import express from 'express'
import bodyParser from 'body-parser'
import linkedInExport from './linkedInExport.js'
import getAccessToken from './getAccessToken.js' 
import {AuthorizationCode} from 'simple-oauth2';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 8000
const credentials = {
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
  },
  auth: {
    tokenHost: 'https://www.linkedin.com',
    tokenPath: '/oauth/v2/accessToken',
    authorizePath: '/oauth/v2/authorization'
  }
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getToken', async (req, res) => {
    const authorizationCode = process.env.AUTHORIZATION_CODE;  
    const client = new AuthorizationCode(credentials);
    await getAccessToken(client,authorizationCode,"http://www.decentrasol.netwwork")
    res.send('res')
})

/**
 * Callback from LinkedIn after we called /export
 */
app.get('/linkedin', (req, res) => {
	console.log(req)
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data))
})

app.get('/export', async (req, res) => {
    const client = new AuthorizationCode(credentials);
    const {authorizationUri} = await linkedInExport(client)
    res.send('Now getting authorization uri and redicting to it', authorizationUri)
    res.redirect(authorizationUri)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
