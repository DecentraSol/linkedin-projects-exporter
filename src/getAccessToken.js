// import {AuthorizationCode} from 'simple-oauth2';
import axios from 'axios'
import * as dotenv from 'dotenv' 
dotenv.config()

// const getAccessToken = async (client, authorizationCode,redirect_uri) => {
const getAccessToken = async (credentials) => {
//     const tokenParams = {
//         code: authorizationCode,
//         redirect_uri: redirect_uri
//     };
//     console.log("getting token with tokenParams",tokenParams)
//     const accessToken = await client.getToken(tokenParams)
//     console.log('Access token:', accessToken.token.access_token);
    //https://learn.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin%2Fconsumer%2Fcontext
     const accessToken = await axios({
            method: 'POST',
            url: `https://www.linkedin.com/oauth/v2/accessToken?grant_type=client_credentials&client_id=${credentials.client.id}&client_secret=${credentials.client.secret}`
      });

    return accessToken
}
export default getAccessToken