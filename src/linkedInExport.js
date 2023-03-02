import {v4} from 'uuid';
import {AuthorizationCode} from 'simple-oauth2';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

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

const linkedInExport = () => {
  console.log("linkedInExport",linkedInExport)
  // Set up the OAuth2 client
  // const oauth2 = simpleOAuth2.create(credentials);
  const client = new AuthorizationCode(credentials);

  // Set up the OAuth2 authorization URL
  const authorizationUri =  client.authorizeURL({
    redirect_uri: process.env.REDIRECT_URL,
    scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social'],
    state: v4()
  });

  // Redirect the user to the authorization URL to obtain consent
  console.log(`Please visit the following URL to authorize your LinkedIn account:\n${authorizationUri}`);

}

export default linkedInExport


// openai@le-space.de
// How I can get my actual access token obtained from LinkedIn's OAuth 2.0 authentication flow?
// To obtain an access token from LinkedIn's OAuth 2.0 authentication flow, you will need to complete the following steps:

// Register your application with LinkedIn by creating a LinkedIn Developer account and creating a new application. You will need to provide details such as your application name, website URL, and OAuth 2.0 redirect URL.
// Obtain your client ID and client secret from your LinkedIn application dashboard.
// Implement the OAuth 2.0 authorization flow in your Node.js application. This typically involves redirecting the user to LinkedIn's authorization endpoint to obtain their consent, and then exchanging the authorization code for an access token. You can use a library such as passport-linkedin-oauth2 or simple-oauth2 to simplify this process.
// Once you have obtained an access token, you can use it to authenticate your API requests by including it in the Authorization header, as shown in the previous code examples.
// Here's an example using simple-oauth2 library to retrieve an access token for the LinkedIn API:

// javascript
// Copy code


// }
// main()

// Once the user has authorized your application, exchange the authorization code for an access token
/*const authorizationCode = '<THE_AUTHORIZATION_CODE_OBTAINED_FROM_THE_REDIRECT_URI>';
const tokenParams = {
  code: authorizationCode,
  redirect_uri: '<YOUR_REDIRECT_URI>'
};

oauth2.authorizationCode.getToken(tokenParams)
  .then(result => {
    // Extract the access token from the token response
    const accessToken = oauth2.accessToken.create(result);

    console.log('Access token:', accessToken.token.access_token);
  })
  .catch(error => {
    console.error('Error retrieving access token:', error);
  });

  return 

const axios = require('axios');

// Set up authentication and headers
const access_token = '<YOUR_ACCESS_TOKEN>';
const headers = { 'Authorization': `Bearer ${access_token}` };

// Set up the API endpoint for jobs and projects
const jobs_endpoint = 'https://api.linkedin.com/v2/jobs';
const jobs_params = { 'q': 'creator', 'creator': 'urn:li:person:me' };

// Retrieve jobs
axios.get(jobs_endpoint, { headers, params: jobs_params })
  .then(response => {
    // Extract the jobs from the JSON response
    const jobs = response.data.elements;

    // Print the jobs
    console.log('My Jobs:');
    jobs.forEach(job => console.log(job.title));
  })
  .catch(error => {
    console.error('Error retrieving jobs:', error);
  });

// Set up the API endpoint for projects
const projects_endpoint = 'https://api.linkedin.com/v2/projects';
const projects_params = { 'q': 'owner', 'owner': 'urn:li:person:me' };

// Retrieve projects
axios.get(projects_endpoint, { headers, params: projects_params })
  .then(response => {
    // Extract the projects from the JSON response
    const projects = response.data.elements;

    // Print the projects
    console.log('\nMy Projects:');
    projects.forEach(project => console.log(project.title));
  })
  .catch(error => {
    console.error('Error retrieving projects:', error);
  });
//Again, be sure to replace <YOUR_ACCESS_TOKEN> with your actual access token obtained from LinkedIn's OAuth 2.0 authentication flow, and make sure that your LinkedIn API permissions allow for the retrieval of your own jobs and projects.

*/



